const Project = require('../models/project');

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

module.exports = {
    getProjects,
    createProject,
}