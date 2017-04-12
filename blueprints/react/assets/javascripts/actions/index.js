import { ADD_COMMENT } from '../constants';

const addComment = (author, body) => ({
  type: ADD_COMMENT,
  author,
  body
});

export { addComment };
