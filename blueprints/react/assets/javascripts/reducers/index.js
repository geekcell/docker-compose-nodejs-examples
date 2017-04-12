import { combineReducers } from 'redux';
import comments from './comments';

const commentsApp = combineReducers({ comments });

export default commentsApp;
