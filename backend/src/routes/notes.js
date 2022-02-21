const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req, res) => res.send('Notes Routesss'));

module.exports = router;