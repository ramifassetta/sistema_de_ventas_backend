const db = require('../config/db.js');
const Categorias = require('./Categorias');
const Productos = require('./Productos');

// Definir la relación uno a muchos entre Categoria y Productos
Categorias.hasMany(Productos, { foreignKey: 'categoria_id', as: 'productos' });
Productos.belongsTo(Categorias, { foreignKey: 'categoria_id', as: 'categoria' });

// Exportar los modelos y la instancia de Sequelize
module.exports = { Categorias, Productos, db };
