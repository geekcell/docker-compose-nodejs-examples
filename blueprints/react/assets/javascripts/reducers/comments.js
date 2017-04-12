import uniqid from 'uniqid';
import { ADD_COMMENT } from '../constants';

const comment = (state, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        id: uniqid(),
        author: action.author,
        body: action.body
      };
    default:
      return state;
  }
};

const comments = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        comment(undefined, action)
      ];
    default:
      return state;
  }
};

export default comments;
