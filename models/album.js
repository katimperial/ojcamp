const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AlbumSchema = new Schema(
    {
        artist: { type: String, required: false},
        title: { type: String, required: true },
        trackListings: { type: String, required: true },
        releaseDate: { type: String, required: true },
        label: { type: String, required: true },
        art: {type: String, required: true},
        project_id: { type: Schema.Types.ObjectId, ref: 'project_id' }
    },
    { timestamps: true },
)

module.exports = AlbumSchema