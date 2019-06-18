var route = require('express').Router()
var coreRoutes = require('./core');
var mockRoutes = require('./mockapi')

/* 
NOTE:  
ENDPOINT : /core/*
PURPOSE : core routes
*/
route.use('/core', coreRoutes)

/* 
NOTE:  
ENDPOINT : /mockapi/*
PURPOSE : mock routes
*/
route.use('/mockapi', mockRoutes)

module.exports = route      