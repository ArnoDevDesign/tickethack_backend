const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    weight: Number,
    image: String
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;