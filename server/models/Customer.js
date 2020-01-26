const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    cus_id: String,
    cus_name: String,
    cus_identity_num: Number,
    cus_gender: String
});

module.exports = mongoose.model('Customer', CustomerSchema);