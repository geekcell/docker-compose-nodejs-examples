const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dbHost = process.env.DATABASE_HOST;
const dbPort = process.env.DATABASE_PORT;

const init = ({ host, port } = { host: dbHost, port: dbPort }) => {
  mongoose.connect(`mongodb://${host}:${port}`);
};

// Set up Mongoose model
const commentSchema = new mongoose.Schema({
  author: String,
  body: String,
})

commentSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

const Comment = mongoose.model('Comment', commentSchema);

const addNewPost = (author, body) => {
  const comment = new Comment({ author, body });

  return comment.save().then(savedComment => savedComment.id);
}

const getPosts = () => Comment.find().exec();

const getPostById = id => Comment.findById(id).exec();

module.exports = { init, addNewPost, getPosts, getPostById };
