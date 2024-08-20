import app from './app.js';
import dotenv from 'dotenv';
import db from './config/db.js';
import morgan from 'morgan';

dotenv.config();

const PORT = process.env.PORT || 3000;

// Configurar Morgan para registrar las solicitudes HTTP
app.use(morgan('combined')); // 'combined' es un formato de registro predefinido

db.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida con éxito.');
        return db.sync({ alter: true }); // Sincroniza los modelos con la base de datos
    })
    .then(() => {
        console.log('Base de datos sincronizada.');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error al conectar o sincronizar la base de datos:', err);
    });
