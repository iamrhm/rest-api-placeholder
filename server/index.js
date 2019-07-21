var express = require('express')
var app = express()
var PORT = 4000 || process.env.PORT
var bodyParser = require('body-parser')
var routes = require('./routes')
var mongoose = require('mongoose')
var dbURI = require('./config')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose.connect(dbURI, {
  useNewUrlParser: true,
}, (err, db) => {
  if (err !== null){
    console.log('DataBase connection error', err)
  }else{
    console.log('Database connected')
  }
})

app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Listig to port ${PORT}`)
})