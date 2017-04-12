const express = require('express');
const database = require('../database');
const router = new express.Router();

const saveComment = (req, res) => {
  const { author, body } = req.body;

  if (!author || !body) {
    return res.redirect('/');
  }

  return database
    .addNewPost(author, body)
    .then(
      () => res.redirect('/'),
      err => res.status(500).send('Oops, something went wrong!')
    )
  ;
}

const home = (req, res) => {
  return database
    .getPosts()
    .then(
      posts => res.render('index', { posts }),
      err => res.status(500).send('Oops, something went wrong!')
    )
  ;
};

router.get('/', home);
router.post('/', saveComment);

module.exports = router;
