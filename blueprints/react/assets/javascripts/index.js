import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import bootstrap from './bootstrap';
import CommentsApp from './components/comments/App';
import { getComments } from './actions';
import reducer from './reducers';

bootstrap(window);

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(getComments());

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <CommentsApp/>
    </Provider>,
    document.getElementById('comments-root')
  );
});
