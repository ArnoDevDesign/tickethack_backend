const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number
});

//penser aux clés étrangères pour trips vers carts et bookings

const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;