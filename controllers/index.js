const Project = require('../models/project');

const getProjects = async (req, res) => {
    try {
        const projects = await Project.find()
        return res.status(200).json({ projects })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getProjects,
}