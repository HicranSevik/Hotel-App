const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    img_id: String,
    img_path: String
});


module.exports = mongoose.model('Images', ImageSchema);