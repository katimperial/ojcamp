const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is OJcamp root!'))

router.get('/projects', controllers.getProjects)

router.post('/projects', controllers.createProject)

router.put('/projects/:_id', controllers.updateProject)

router.delete('/projects/:_id', controllers.deleteProjects)

router.get('/albums/', controllers.getAlbums)

router.post('/albums', controllers.createAlbum)

router.delete('/albums/:_id', controllers.deleteAlbums)

module.exports = router;