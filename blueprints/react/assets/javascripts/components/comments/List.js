import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';

let List = ({ comments }) => {
  return (
    <ul className="comments">
      {comments.map(comment => <Comment key={comment.id} {...comment}/>)}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  comments: state.comments
})

List = connect(mapStateToProps)(List);

export default List;
