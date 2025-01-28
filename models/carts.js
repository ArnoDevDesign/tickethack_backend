const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    weight: Number,
    image: String
});

const Cart = mongoose.model('carts', cartSchema);

module.exports = Cart;