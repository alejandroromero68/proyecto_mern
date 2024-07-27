// /backend/routes/cartRoutes.js
const express = require('express');
const mongoose = require('mongoose'); // Asegúrate de tener esta línea
const router = express.Router();
const Cart = require('../models/cartModel');

// Ruta para guardar el carrito
router.post('/', async (req, res) => {
  const { cartItems } = req.body;
  console.log('Recibido en el servidor:', cartItems); // Log para depuración

  try {
    const newCart = new Cart({
      items: cartItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
    });

    await newCart.save();
    res.status(201).json(newCart);
  } catch (error) {
    console.error('Error al guardar el carrito:', error); // Log del error
    res.status(500).json({ message: 'Error al guardar el carrito', error });
  }
});

module.exports = router;
