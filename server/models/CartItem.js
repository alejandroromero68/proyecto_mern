const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number
});

module.exports = mongoose.model('CartItem', cartItemSchema);
