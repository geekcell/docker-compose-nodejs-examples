import React from 'react';
import List from './List';
import AddComment from './AddComment';

const App = () => {
  return (
    <div>
      <p className="lead">Please leave some feedback down in the comments.</p>
      <List />
      <AddComment />
    </div>
  );
}

export default App;
