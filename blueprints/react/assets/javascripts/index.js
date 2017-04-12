import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import CommentsApp from './components/comments/App';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <CommentsApp/>
    </Provider>,
    document.getElementById('comments-root')
  );
});
