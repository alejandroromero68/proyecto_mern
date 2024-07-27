// routes/cart.js

const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // Importa el modelo de Order

// Ruta para guardar un nuevo pedido
router.post('/', async (req, res) => {
  const { cartItems } = req.body;

  try {
    // Aquí puedes guardar el pedido en MongoDB
    const newOrder = new Order({
      items: cartItems,
      date: new Date(), // Puedes agregar más campos según tu modelo Order
    });

    await newOrder.save();

    res.status(201).json({ message: 'Pedido guardado correctamente' });
  } catch (error) {
    console.error('Error al guardar el pedido:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
