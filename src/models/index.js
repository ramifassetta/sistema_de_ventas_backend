import db from '../config/db.js';
import Categoria from './categoria.js';
import Productos from './producto.js';

// Definir la relación uno a muchos entre Categoria y Productos
Categoria.hasMany(Productos, { foreignKey: 'categoria_id', as: 'productos' });
Productos.belongsTo(Categoria, { foreignKey: 'categoria_id', as: 'categoria' });

// Exportar los modelos y la instancia de Sequelize
export { Categoria, Productos, db };
