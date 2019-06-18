var mockRoutes = require('express').Router()
var utils = require('../utils')
var SUCCESS_STATUS = 200;
var ERROR_STATUS = 404;

var validateAndAddForwardSlash = function (endpoint) {
  if (endpoint !== null && endpoint !== undefined && endpoint !== '')
    return `/${endpoint}`
  return null
}
/* 
NOTE:  
ENDPOINT : /:projectname/:customroutes
PURPOSE : Custom Routes GET response
*/
mockRoutes.get('/:projectname/:customroute', (req, res) => {
  var project = req.params.projectname;
  var customroute = validateAndAddForwardSlash(req.params.customroute);

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
  var projectname = req.params.projectname;
  var customroute = validateAndAddForwardSlash(req.params.customroute);

  if (projectname !== undefined && customroute !== undefined
    && projectname !== null && customroute !== null)
    utils.getResponse(projectname, customroute, 'POST').then((data) => {
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
PURPOSE : Custom Routes PUT response
*/
mockRoutes.put('/:projectname/:customroute', (req, res) => {
  var projectname = req.params.projectname;
  var customroute = validateAndAddForwardSlash(req.params.customroute);

  if (projectname !== undefined && customroute !== undefined
    && projectname !== null && customroute !== null)
    utils.getResponse(projectname, customroute, 'PUT').then((data) => {
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
PURPOSE : Custom Routes DELETE response
*/
mockRoutes.delete('/:projectname/:customroute', (req, res) => {
  var projectname = req.params.projectname;
  var customroute = validateAndAddForwardSlash(req.params.customroute);

  if (projectname !== undefined && customroute !== undefined
    && projectname !== null && customroute !== null)
    utils.getResponse(projectname, customroute, 'DELETE').then((data) => {
      res.status(data.status)
      res.send(data.response)
    }).catch((errMsg) => {
      res.status(ERROR_STATUS)
      res.send(errMsg)
    })
})

module.exports = mockRoutes      