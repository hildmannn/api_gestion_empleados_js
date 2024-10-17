// src/models/index.js

// Importar las dependencias
const Sequelize = require('sequelize');
require('dotenv').config(); // Cargar las variables de entorno desde el archivo .env

// Crear la conexión a la base de datos usando Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,     // Nombre de la base de datos
  process.env.DB_USER,     // Usuario de la base de datos
  process.env.DB_PASS,     // Contraseña del usuario
  {
    host: process.env.DB_HOST, // Host del servidor MySQL
    port: process.env.DB_PORT, // Puerto de conexión
    dialect: 'mysql',          // Tipo de base de datos (en este caso MySQL)
  }
);

// Probar la conexión
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito.');
  })
  .catch(err => {
    console.error('Error al conectar con la base de datos:', err);
  });

// Exportar la conexión para que pueda ser usada en otros archivos
module.exports = sequelize;
