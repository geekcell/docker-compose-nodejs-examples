import React from 'react';
import ReactDOM from 'react-dom';
import Comments from './components/Comments';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Comments />,
    document.getElementById('comments-root')
  );
});
