// models/Order.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  items: [{ type: Schema.Types.ObjectId, ref: 'Product' }], // Referencia a los productos en el pedido
  date: { type: Date, default: Date.now }, // Fecha del pedido
  // Otros campos que desees agregar
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
