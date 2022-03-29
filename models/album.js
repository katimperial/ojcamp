const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Album = new Schema(
    {
        title: { type: String, required: true },
        trackListings: { type: String, required: true },
        releaseDate: { type: String, required: true },
        label: { type: String, required: true },
        art: {type: String, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('project', Project)