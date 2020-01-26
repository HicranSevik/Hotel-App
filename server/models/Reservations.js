const mongoose = require('mongoose');
const Customer = require('./Customer');

const Schema = mongoose.Schema;

const ReservationsSchema = new Schema({
    res_customers: [Customer.schema],
    res_room_id: Schema.Types.ObjectId,
    hotel_id: Schema.Types.ObjectId,
    res_price: Number,
    res_check_in: Date,
    res_check_out: Date,
    res_save_user: String,
    res_save_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Reservations', ReservationsSchema);