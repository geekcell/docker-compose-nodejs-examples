const express = require('express');
const database = require('../database');
const router = new express.Router();

const createPost = (req, res) => {
  const { author, body } = req.body;

  res.setHeader('Content-Type', 'application/json');

  return database
    .addNewPost(author, body)
    .then(
      id => res.status(201).send({ id }),
      err => res.status(500).send({ err: 'Oops, something went wrong!' })
    )
  ;
}

const listPosts = (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  return database
    .getPosts()
    .then(
      posts => res.send(posts),
      err => res.status(500).send({ err: 'Oops, something went wrong!' })
    )
  ;
}

const showPost = (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  return database
    .getPostById(req.params.id)
    .then(
      post => res.send(post),
      err => res.status(500).send({ err: 'Oops, something went wrong!' })
    )
  ;
}

router.post('/comments', createPost);
router.get('/comments', listPosts);
router.get('/comments/:id', showPost);

module.exports = router;
