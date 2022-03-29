const Album = require('../models/album');

const createAlbum = async (req, res) => {
    try {
        const album = await new Album(req.body)
        await album.save()
        return res.status(201).json({
            album,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createAlbum,
}

const Project = require('../models/project');

const createProject = async (req, res) => {
    try {
        const project = await new Project(req.body)
        await project.save()
        return res.status(201).json({
            project,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createProject,
}