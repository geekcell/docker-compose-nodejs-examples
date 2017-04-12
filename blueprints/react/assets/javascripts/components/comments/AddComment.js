import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions';

let AddComment = ({ dispatch }) => {
  let authorInput, bodyInput;

  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (!authorInput.value.trim() || !bodyInput.value.trim()) {
        return;
      }

      dispatch(addComment(authorInput.value, bodyInput.value));
      authorInput.value = '';
      bodyInput.value = '';
    }}>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          className="form-control"
          id="author"
          placeholder="Your name"
          ref={node => {
            authorInput = node;
          }} />
      </div>
      <div className="form-group">
        <label htmlFor="body">Author</label>
        <textarea
          className="form-control"
          id="body"
          placeholder="Tell us something"
          ref={node => {
            bodyInput = node;
          }}/>
      </div>
      <button type="submit" className="btn btn-default btn-primary">Submit Comment</button>
    </form>
  );
};

AddComment = connect()(AddComment);

export default AddComment;
