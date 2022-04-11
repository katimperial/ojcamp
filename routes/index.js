const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is OJcamp root!'))

router.get('/projects', controllers.getProjects)

router.post('/projects', controllers.createProject)

router.put('projects', controllers.updateProject)

router.delete('/projects', controllers.deleteProjects)

router.get('/albums/', controllers.getAlbums)

router.post('/albums', controllers.createAlbum)

module.exports = router;