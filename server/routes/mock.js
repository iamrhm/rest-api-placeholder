var mockRoutes = require('express').Router()
var utils = require('../utils')
var SUCCESS_STATUS = 200;
var ERROR_STATUS = 404;

/* 
NOTE:  
ENDPOINT : /:projectname/:customroutes
PURPOSE : Custom Routes GET response
*/
mockRoutes.get('/:projectname/:customroute', (req, res) => {
  var project = req.params.projectname;
  var customroute = `/${req.params.customroute}`;

  if (project !== undefined && customroute !== undefined
    && project !== null && customroute !== null)

    utils.getResponse(project, customroute, 'GET').then((data) => {
      res.status(data.status)
      res.send(data.response)
    }).catch((errMsg) => {
      res.status(ERROR_STATUS)
      res.send(errMsg)
    })
})

/* 
NOTE:  
ENDPOINT : /:projectname/:customroutes
PURPOSE : Custom Routes POST response
*/
mockRoutes.post('/:projectname/:customroute', (req, res) => {
  var projectName = req.params.projectname;
  var customroute = `/${req.params.customroute}`;

  if (projectName !== undefined && customroute !== undefined
    && projectName !== null && customroute !== null)
    utils.getResponse(projectName, customroute, 'POST').then((data, status) => {
      res.status(data.status)
      res.send(data.response)
    }).catch((errMsg) => {
      res.status(ERROR_STATUS)
      res.send(errMsg)
    })
})

module.exports = mockRoutes      