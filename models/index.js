const mongoose = require('mongoose')
const AlbumSchema = require('./album')
const ProjectSchema = require('./project')

const Album = mongoose.model('Album', AlbumSchema)
const Project = mongoose.model('Project', ProjectSchema)

module.exports = {
  Album,
  Project
}