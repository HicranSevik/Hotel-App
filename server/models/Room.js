const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    room_id: String,
    room_price: Number,
    room_type: String,
    room_capacity: Number,
});


module.exports = mongoose.model('Rooms', RoomSchema);