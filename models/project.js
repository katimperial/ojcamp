const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Project = new Schema(
    {
        name: { type: String, required: true },
        albums: { type: String, required: true },
        image: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = Project