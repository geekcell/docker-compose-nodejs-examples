import React from 'react';

const Comment = ({ id, author, body }) => {
  return (
    <li className="comment" id="comment_{id}">
      <div>
        <h3>{author} <small>wrote a comment</small></h3>
        <blockquote>
          <p>{body}</p>
        </blockquote>
      </div>
    </li>
  );
};

export default Comment;
