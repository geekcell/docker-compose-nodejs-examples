import { ADD_COMMENT, RECEIVE_COMMENTS } from '../constants';

const comment = (state, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        id: action.id,
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
    case RECEIVE_COMMENTS:
      return action.comments;
    default:
      return state;
  }
};

export default comments;
