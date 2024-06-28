const express = require('express');
const router = express.Router();
const CartItem = require('../models/CartItem'); // Ajusta la ruta según la estructura de tu proyecto

router.post('/save', async (req, res) => {
  try {
    const cartItems = req.body.cartItems;
    await CartItem.insertMany(cartItems);
    res.status(201).json({ message: 'Cart saved successfully' });
  } catch (error) {
    console.error('Error saving cart', error);
    res.status(500).json({ error: 'Error saving cart' });
  }
});

module.exports = router;
