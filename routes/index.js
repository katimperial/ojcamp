const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.send('This is OJcamp root!'))

module.exports = router;