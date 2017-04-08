const express = require('express');
const router = new express.Router();

const home = (req, res) => res.render('index');

router.get('/', home);

module.exports = router;
