var coreRoutes = require('express').Router()
var utils = require('../utils')
var SUCCESS_STATUS = 200;
var ERROR_STATUS = 404;


/* 
NOTE:  
ENDPOINT : /addnewproject 
PURPOSE : Save New Project Name
CORE ROUTE: Y
*/
coreRoutes.post('/addnewproject', (req, res) => {
  var data = req.body;
  if (data.projectname !== undefined) {
    var isProjectAdded = utils.addNewProject(data.projectname)
    isProjectAdded.then((successMsg) => {
      res.status(SUCCESS_STATUS)
      res.send(successMsg)
    }).catch((errMsg) => {
      res.status(ERROR_STATUS)
      res.send(errMsg)
    })
  }
})

/* 
NOTE:  
ENDPOINT : /addendpoint/:projectname 
PURPOSE : Save Endpoints inside a project
CORE ROUTE: Y
*/
coreRoutes.post('/addendpoint/:projectname', (req, res) => {
  var data = {
    endpoint: req.body.endpoint,
    status: req.body.status,
    response: req.body.response,
    method: req.body.method,
  }
  var projectName = req.params.projectname

  if (data.endpoint !== undefined && data.response !== undefined
    && data.method !== undefined && projectName !== undefined) {

    var project = utils.addEndPoint(projectName, data)
    project.then((successMsg) => {
      res.status(SUCCESS_STATUS)
      res.send(successMsg)
    }).catch((errMsg) => {
      res.status(ERROR_STATUS)
      res.send(errMsg)
    })
  } else {
    res.status(ERROR_STATUS)
    res.send('validate your input')
  }
})

/* 
NOTE:  
ENDPOINT : /endpoint
PURPOSE : Edit endpoints of a project
CORE ROUTE: Y
*/
coreRoutes.put('/endpoint/:projectname', (req, res) => {
  var projectName = req.params.projectname;
  var data = {
    endpoint: req.body.endpoint,
    status: req.body.status,
    response: req.body.response,
    method: req.body.method,
  }
  if (projectName !== undefined && projectName !== null && projectName !== '') {
    var editedData = utils.editEndPoint(projectName, data)
    editedData.then((data) => {
      res.status(SUCCESS_STATUS)
      res.send(data)
    }).catch((errMsg) => {
      res.send(ERROR_STATUS)
      res.send(errMsg)
    })
  }
  else {
    res.status(ERROR_STATUS)
    res.send('Check Project Name')
  }
})


/* 
NOTE:  
ENDPOINT : /getProject
PURPOSE : Default all 
CORE ROUTE: Y
*/
coreRoutes.get('/getProject', (req, res) => {
  var allProjects = util.getProject()
  allProjects.then((projects) => {
    res.status(SUCCESS_STATUS)
    res.send(projects)
  }).catch((err) => {
    res.status(ERROR_STATUS)
    res.send(err)
  })
})

/* 
NOTE:  
ENDPOINT : /getProject/projectname
PURPOSE : Spefic project
CORE ROUTE: Y
*/
coreRoutes.get('/getProject/:projectname', (req, res) => {
  console.log(req.params.projectname)
  res.send(req.params.projectname)
})

module.exports = coreRoutes      