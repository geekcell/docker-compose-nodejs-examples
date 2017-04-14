import * as api from '../api';
import { ADD_COMMENT, RECEIVE_COMMENTS } from '../constants';

const addComment = (author, body) => dispatch => {
  return api
    .addComment(author, body)
    .then(id => dispatch({
      type: ADD_COMMENT,
      id,
      author,
      body
    }))
  ;
};

const getComments = () => dispatch => {
  return api
    .getComments()
    .then(comments => dispatch({
      type: RECEIVE_COMMENTS,
      comments
    }))
  ;
};

export { addComment, getComments };
