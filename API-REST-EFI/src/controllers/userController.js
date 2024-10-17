const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../models');

exports.register = async (req, res) => {
  try {
    const { nombre, correo, contraseña, rol } = req.body;
    const user = await db.User.create({ nombre, correo, contraseña, rol });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;
    const user = await db.User.findOne({ where: { correo } });
    if (!user || !(await bcrypt.compare(contraseña, user.contraseña))) {
      return res.status(400).json({ error: 'Correo o contraseña incorrectos' });
    }
    const token = jwt.sign({ id: user.id, rol: user.rol }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
