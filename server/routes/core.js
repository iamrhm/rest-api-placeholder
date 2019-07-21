var coreRoutes = require('express').Router()
var utils = require('../utils')
var SUCCESS_STATUS = 200;
var ERROR_STATUS = 404;

/* ------ FOR PROJECT SPECIFIC ------ */

/* 
NOTE:  
ENDPOINT : /getprojectnames
PURPOSE : Default all project names
CORE ROUTE: Y
*/
coreRoutes.get('/getprojectnames', (req, res) => {
  var allProjects = utils.getAllProjectNames()
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
ENDPOINT : /delete/project
PURPOSE : delete a project
CORE ROUTE: Y
*/
coreRoutes.delete('/deleteproject', (req, res) => {
  var data = req.body
  utils.deleteProject(data).then((successMsg) => {
    res.status(SUCCESS_STATUS)
    res.send(successMsg)
  }).catch((errMsg) => {
    res.status(ERROR_STATUS)
    res.send(errMsg)
  })
})



/* ------ FOR ENDPOINT SPECIFIC ------ */

/* 
NOTE:  
ENDPOINT : /getproject/projectname
PURPOSE : Spefic Project Endpoint Details
CORE ROUTE: Y
*/
coreRoutes.get('/getendpoints/:projectname', (req, res) => {
  var projectDetailse = utils.getProjectEndpoints(req.params.projectname)
  projectDetailse.then((data) => {
    res.status(SUCCESS_STATUS)
    res.send(data)
  }).catch((err) => {
    res.status(ERROR_STATUS)
    res.send(err)
  })
})

/* 
NOTE:  
ENDPOINT : /addendpoint/:projectname 
PURPOSE : Save Endpoints in a Project
CORE ROUTE: Y
*/
coreRoutes.post('/addendpoint/:projectname', (req, res) => {
  var data = {
    endpoint: req.body.endpoint,
    status: req.body.status,
    response: req.body.response,
    method: req.body.method,
  }
  var projectname = req.params.projectname

  if (data.endpoint !== undefined && data.response !== undefined
    && data.method !== undefined && projectname !== undefined) {

    var project = utils.addEndPoint(projectname, data)
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
ENDPOINT : /endpoint/:projectname
PURPOSE : Edit Endpoints of a Project
CORE ROUTE: Y
*/
coreRoutes.put('/editendpoint/:projectname', (req, res) => {
  var projectname = req.params.projectname;
  var data = {
    endpoint: req.body.endpoint,
    status: req.body.status,
    response: req.body.response,
    method: req.body.method,
  }
  if (projectname !== undefined && projectname !== null && projectname !== '') {
    var editedData = utils.editEndPoint(projectname, data)
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
ENDPOINT : /delete/projectname
PURPOSE : delete an endpoint
CORE ROUTE: Y
*/

coreRoutes.delete('deleteendpoint/:projectname', (req, res) => {
  var projectname = req.params.projectname
  if (projectname !== undefined && projectname !== null && projectname !== '') {
    var data = req.body;
    var isEndpointDeleted = utils.deleteEndPoint(projectNam, data);
    isEndpointDeleted.then((successMsg) => {
      res.status(200)
      res.send(SUCCESS_STATUS)
    }).catch((errMsg) => {
      res.status(ERROR_STATUS)
      res.send(err)
    })
  }
})



module.exports = coreRoutes      