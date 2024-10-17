const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    correo: { type: DataTypes.STRING, unique: true, allowNull: false },
    contraseña: { type: DataTypes.STRING, allowNull: false },
    rol: { type: DataTypes.STRING, defaultValue: 'empleado' },
  });

  // Encriptar la contraseña antes de guardar el usuario
  User.beforeCreate(async (user) => {
    user.contraseña = await bcrypt.hash(user.contraseña, 8);
  });

  return User;
};
