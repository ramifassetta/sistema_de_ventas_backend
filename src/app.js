const express = require('express');
const productosRoutes = require('./routes/productosRoutes.js');
const categoriasRoutes = require('./routes/categoriasRoutes.js');
const dotenv = require('dotenv');

dotenv.config(); 

const cors = require('cors');
const app = express();

app.use(express.json({ limit: '50mb' }));

app.use(cors({
    origin: 'http://127.0.0.1:5173', 
}));

app.use('/api/productos', productosRoutes);
app.use('/api/categorias', categoriasRoutes);

module.exports = app;
