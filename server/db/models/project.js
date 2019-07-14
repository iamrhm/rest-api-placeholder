const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  name: String,
  endpointlist: [{ endpoint: String, status: Number, response: Object, method: String }]
})

const Project = mongoose.model('project', projectSchema)

module.exports = Project;