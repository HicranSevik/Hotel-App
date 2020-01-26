const mongoose = require('mongoose');
const Reservations = require('./Reservations');
const Comments = require('./Comments');
const Room = require('./Room');
const Images = require('./Images');

const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    hotel_name: String,
    hotel_capacity: Number,
    hotel_phone: String,
    hotel_vote: Number,
    hotel_city: String,
    hotel_image: String
});

module.exports = mongoose.model('Hotel', HotelSchema);
