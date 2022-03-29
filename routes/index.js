const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is OJcamp root!'))

router.get('/projects', controllers.getProjects)

router.post('/projects', controllers.createProject)

module.exports = router;