const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    comment_id: String,
    comments: String,
    comment_user: String,
    comment_vote: Number,
    comment_save_date: Date
});

module.exports = mongoose.model('Comments', CommentSchema);
