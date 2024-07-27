const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

// Endpoint para registrar un nuevo usuario
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).send('Usuario registrado con éxito');
  } catch (error) {
    res.status(500).send('Error registrando el usuario');
  }
});

// Endpoint para autenticar a un usuario
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('Usuario no encontrado');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Contraseña incorrecta');
    }
    res.status(200).send('Inicio de sesión exitoso');
  } catch (error) {
    res.status(500).send('Error al iniciar sesión');
    console.error(error);
  }
});

module.exports = router;
