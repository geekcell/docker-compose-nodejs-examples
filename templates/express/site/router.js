const express = require('express');
const router = new express.Router();

const home = (req, res) => {
  return res.render('index');
}

router.get('/', home);

module.exports = router;
