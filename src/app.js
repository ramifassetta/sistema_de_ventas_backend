import express from 'express';
import productosRoutes from './routes/productosRoutes.js';
import categoriasRoutes from './routes/categoriasRoutes.js';
import dotenv from 'dotenv';

dotenv.config(); // Carga variables de entorno

const app = express();

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Rutas
app.use('/api/productos', productosRoutes);
app.use('/api/categorias', categoriasRoutes);

export default app;
