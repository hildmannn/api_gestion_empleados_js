const express = require('express');
const app = express();
const db = require('./src/models');
const userRoutes = require('./src/routes/userRoutes');

app.use(express.json());

// Rutas
app.use('/users', userRoutes);

// Sincronizar la base de datos y levantar el servidor
db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
  });
});
