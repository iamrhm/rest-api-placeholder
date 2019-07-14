var Project = require('./db/models/project');
var DEFAULT_STATUS = 200;

/* ----- Basic Validations ----- */
var checkIfDataExists = function (data) {
  if (data !== undefined && data !== null && data !== '') {
    return true
  }
  else false
}
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
var isEndpointValid = function (data) {
  if (!checkIfDataExists(data.endpoint) &&
    !checkIfDataExists(data.response) &&
    !checkIfDataExists(data.status) &&
    !checkIfDataExists(data.method)) {
    return false
  }
  return true
}
var validateEndpointDetails = function (data) {
  if (!checkIfDataExists(data.endpoint) &&
    !checkIfDataExists(data.response) &&
    !checkIfDataExists(data.status) &&
    !checkIfDataExists(data.method)) {
    return false
  }
  return {
    endpoint: trimTailSlash(data.endpoint),
    response: validateResponse(data.response),
    status: validateStatus(data.status),
    method: data.method
  }
}

/* ---- Filter & Convert Data For Client ---- */

var filterProjectDetails = function (projectDetails) {
  var newProjectDetails = { name: projectDetails.name, endpointlist: [] }
  if (projectDetails.endpointlist !== undefined && projectDetails.endpointlist.length > 0) {
    newProjectDetails.endpointlist = projectDetails.endpointlist.map((data) => {
      return {
        endpoint: data.endpoint,
        status: data.status,
        response: JSON.stringify(data.response, null, 2),
        method: data.method
      }
    })
    return newProjectDetails
  }
  else {
    throw error
  }
}

/* ------ Logical Part ------ */
var addNewProject = function (projectname) {
  if (checkIfDataExists(projectname)) {
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
  else {
    return new Promise.reject(`Validate Project Name`)
  }
}

var addEndPoint = function (projectname, data) {
  if (!isEndpointValid(data))
    return new Promise.reject(`invalid data`)
    
  var endpointDetails = validateEndpointDetails(data)
  return new Promise((resolve, reject) => {
    Project.findOne({ name: projectname })
      .then((data) => {
        var isEndpointExists = data.endpointlist.find((endpointDetail) => endpointDetail.endpoint === endpointDetails.endpoint)
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

var getAllProjectNames = function () {
  return new Promise((resolve, reject) => {
    Project.find({}, { _id: 0, name: 1 }).then((projectNames) => {
      resolve(projectNames)
    }).catch((err) => {
      reject('No Project Exists')
    })
  })
}

var getProject = function (projectname) {
  if (checkIfDataExists(projectname)) {
    return new Promise((resolve, reject) => {
      Project.findOne({ name: projectname }, { _id: 0 }).then((projectDetails) => {
        resolve(filterProjectDetails(projectDetails))
      }).catch((err) => {
        reject(`${projectname} doesn't exists`)
      })
    })
  } else {
    reject(`Invalid projectname`)
  }
}

var editEndPoint = function (projectname, data) {
  if (!isEndpointValid(data))
    return new Promise.reject(`invalid data`)

  var endpointDetails = validateEndpointDetails(data)
  return new Promise((resolve, reject) => {
    Project.findOne({ name: projectname }).then((project) => {
      var endpointList = project.endpointlist
      var newEndPointList = endpointList.map((data) => {
        if (data.endpoint === endpointDetails.endpoint) {
          return endpointDetails
        }
        return data
      })
      Project.findOneAndUpdate({ name: projectname },
        { endpointlist: newEndPointList }).then((data) => {
          resolve('Successfully updated')
        }).catch((err) => {
          reject(`Not updated`)
        })
    })
  })
}

var deleteEndPoint = function (projectname, data) {
  var endpoint = data.endpoint;
  endpoint = trimTailSlash(endpoint);
  if (checkIfDataExists(endpoint)) {
    return new Promise((resolve, reject) => {
      Project.findOne({ name: projectname }).then((data) => {
        var endpointList = data.endpointlist;
        var newEndpointList = endpointList.filter((data) => (data.endpoint !== endpoint))
        Project.findOneAndUpdate({ name: projectname },
          { endpointlist: newEndpointList }).then((data) => {
            resolve('Endpoint deleted Successfully')
          }).catch((err) => { reject(`Something went wrong`) })
      }).catch((err) => { reject(`${projectname} doesn't exists`) })
    })
  }
  else {
    return new Promise.reject(`validate your endpoint ${endpoint}`)
  }
}

var deleteProject = function (data) {
  var projectname = data.projectname;
  if (checkIfDataExists(projectname)) {
    return new Promise((resolve, reject) => {
      Project.findOneAndRemove({ name: projectname }).then((data) => {
        resolve(`${projectname} deleted successfully`)
      }).catch((err) => reject(`${projectname} not found`))
    })
  }
  else {
    return new Promise.reject(`Validate Your Project Name`)
  }

}

var getResponse = function (projectname, customroute, reqMethod) {
  if (!checkIfDataExists(projectname) && !checkIfDataExists(customroute) && !checkIfDataExists(reqMethod))
    return new Promise.reject(`validate ${'projectname:', projectname, 'custome route:', customroute, 'reqest method:', reqMethod}`)

  customroute = trimTailSlash(customroute);
  return new Promise((resolve, reject) => {
    Project.findOne({ name: projectname }).then((proj) => {
      var endpointList = proj.endpointlist;
      var endpointDetails = endpointList.find((data) => {
        return data.endpoint === customroute && data.method.toUpperCase() === reqMethod.toUpperCase()
      })
      if (endpointDetails !== undefined && endpointDetails !== null) {
        resolve(endpointDetails);
      } else {
        reject(`${customroute} dosen't exists`)
      }
    }).catch((err) => {
      reject(`${projectname} doesn't exists`)
    })
  })
}

module.exports = { addNewProject, addEndPoint, getResponse, getProject, editEndPoint, deleteEndPoint, deleteProject, getAllProjectNames };