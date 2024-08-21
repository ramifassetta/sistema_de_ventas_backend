const express = require('express');
const productosRoutes = require('./routes/productosRoutes.js');
const categoriasRoutes = require('./routes/categoriasRoutes.js');
const dotenv = require('dotenv');

dotenv.config(); // Carga variables de entorno

const app = express();

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Rutas
app.use('/api/productos', productosRoutes);
app.use('/api/categorias', categoriasRoutes);

module.exports = app;
