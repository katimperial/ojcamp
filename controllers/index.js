const Project = require('../models/project');
const Album = require('../models/album')

const getProjects = async (req, res) => {
    try {
        const projects = await Project.find()
        return res.status(200).json({ projects })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

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

const getAlbums = async (req, res) => {
    try {
        const projects = await Album.find()
        return res.status(200).json({ projects })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createAlbum = async (req, res) => {
    try {
        const album = await new Album(req.body)
        await album.save()
        return res.status(201).json({
            project,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getProjects,
    createProject,
    getAlbums,
    createAlbum,
}