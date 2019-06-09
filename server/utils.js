var Project = require('./db/models/project');
var DEFAULT_STATUS = 200;

var trimTailSlash = function (url) {
  return url.replace(/\/$/, "")
}
var validateResponse = function (obj) {
  if (obj === undefined || obj === null) {
    return {}
  } else {
    return obj
  }
}
var validateStatus = function (status) {
  if (status === undefined || status === null) {
    return DEFAULT_STATUS
  } else {
    return status
  }

}
var validateEndpointDetails = function(data){
  return{
    endpoint: trimTailSlash(data.endpoint),
    response: validateResponse(data.response),
    status: validateStatus(data.status),
    method: data.method
  }
}



var addNewProject = function (projectname) {
  return new Promise((resolve, reject) => {
    Project.findOne({ name: projectname })
      .then((project) => {
        if (project)
          reject(`${projectname} all ready exists`)
        else {
          var newProject = new Project({
            name: projectname,
            endpointlist: []
          })
          newProject.save().then((data) => {
            resolve(`${projectname} added successfully`)
          })
            .catch((err) => {
              reject(`Something went wrong`)
            })
        }
      })

  })
}

var addEndPoint = function (projectname, data) {
  var endpointDetails = validateEndpointDetails(data)
  return new Promise((resolve, reject) => {
    Project.findOne({ name: projectname })
      .then((data) => {
        var isEndpointExists = data.endpointlist.find((endpointDetails) => endpointDetails.endpoint === endpointDetails.endpoint)
        if (isEndpointExists !== undefined && isEndpointExists !== null) {
          reject(`${endpointDetails.endpoint} already exists`)
        }
        else {
          Project.update({ name: projectname },
            { $push: { endpointlist: endpointDetails } },
            { safe: true, upsert: true },
            (err) => {
              if (err) {
                reject(`some error occured`)
              }
              else {
                resolve(`endpoint saved successfully`)
              }
            })
        }
      }).catch((err) => {
        reject(`${projectname} doesn't exists`)
      })
  })
}

var getResponse = function (project, customroute, reqMethod) {
  customroute = trimTailSlash(customroute);
  return new Promise((resolve, reject) => {
    Project.findOne({ name: project }).then((proj) => {
      var endpointlist = proj.endpointlist;
      var endpoint = endpointlist.find((data) => {
        return data.endpoint === customroute && data.method.toUpperCase() === reqMethod.toUpperCase()
      })
      if (endpoint !== undefined && endpoint !== null) {
        resolve(endpoint);
      } else {
        reject(`${customroute} dosen't exists`)
      }
    }).catch((err) => {
      reject(`${project} doesn't exists`)
    })
  })
}

var getProject = function (projectName) {
  if (projectName !== undefined && projectName !== null && projectName !== '') {
    return new Promise((resolve, reject) => {
      Project.findOne({ name: projectName }).then((project) => {
        resolve(project)
      }).catch((err) => {
        reject(`${projectName} doesn't exists`)
      })
    })
  } else {
    return new Promise((resolve, reject) => {
      Project.find().then((projects) => {
        resolve(projects)
      }).catch((err) => {
        reject('No Project Exists')
      })
    })
  }
}

var editEndPoint = function (projectName,data) {
  var endpointDetails = validateEndpointDetails(data)
  return new Promise((resolve, reject) => {
    Project.findOne({ name: projectName }).then((project) => {
      var endpointList = project.endpointlist
      var newEndPointList = endpointList.map((data) => {
        if(data.endpoint === endpointDetails.endpoint){
          return endpointDetails
        }
        return data
      })
      Project.findOneAndUpdate({name : projectName},{endpointlist : newEndPointList }).then((data)=>{
        resolve('Successfully updated')
      }).catch((err)=>{
        reject(`Not updated`)
      })
    })
  })
}

module.exports = { addNewProject, addEndPoint, getResponse, getProject, editEndPoint };