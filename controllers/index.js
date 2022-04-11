// https://i.imgur.com/TUPWRFk.jpg

const {Project, Album} = require('../models');

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

const updateProject = async (req, res) => {
    try {
        let updated = await Project.updateOne()
    } catch (error) {
        return res.status(500).json( {error: error.message })
    }
}

const deleteProjects = async (req, res) => {
    try {
        let deleted = await Project.deleteOne()
        console.log(deleted)
    } catch (error) {
        return res.status(500).send(error.message);
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
    console.log(req.body)
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
    updateProject,
    deleteProjects,
    getAlbums,
    createAlbum,
}