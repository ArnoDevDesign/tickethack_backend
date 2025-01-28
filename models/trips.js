const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    weight: Number,
    image: String
});

const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;