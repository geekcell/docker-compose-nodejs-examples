const find = require('lodash.find');

const init = () => Promise.resolve();

let commentId = 1;

const fakeDatabase = [
  {
    id: commentId++,
    author: 'John Doe',
    body: 'I ❤️ Docker Compose!'
  },
  {
    id: commentId++,
    author: 'Jane Doe',
    body: 'This is some cool stuff! 🎉'
  }
];

const addNewPost = (author, body) => {
  fakeDatabase.push({ id: commentId++, author, body });

  return Promise.resolve(commentId);
}

const getPosts = () => Promise.resolve(fakeDatabase);

const getPostById = id => Promise.resolve(find(fakeDatabase, post => id == post.id));

module.exports = { init, addNewPost, getPosts, getPostById };
