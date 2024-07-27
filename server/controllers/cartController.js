// server/controllers/cartController.js

const Cart = require('../models/cartModel');
const mongoose = require('mongoose');

const saveCart = async (req, res) => {
  try {
    const { items } = req.body;

    // Convertir items a ObjectId
    const itemIds = items.map(item => mongoose.Types.ObjectId(item));

    const newCart = new Cart({
      items: itemIds,
      // Otros campos si los tienes
    });

    await newCart.save();
    res.status(201).json(newCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al guardar el carrito', error: error.message });
  }
};

module.exports = { saveCart };
