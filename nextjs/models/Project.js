const mongoose = require('mongoose')

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true
  },
  date: {
    type: String
  },
  service: {
    type: String
  },
  complexity: {
    type: String
  },
  features: {
    type: String
  },
  platforms: {
    type: String
  },
  users: {
    type: String
  },
  total: {
    type: String
  }
})

module.exports = mongoose.models.Project || mongoose.model('Project', ProjectSchema)
