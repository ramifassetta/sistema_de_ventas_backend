const { DataTypes } = require('sequelize');
const db = require('../config/db.js');

const Productos = db.define("productos", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Auto-generar UUID version 4
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    categoria_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'categorias', // nombre de la tabla de categorías
            key: 'id' // clave primaria de la tabla de categorías
        }
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    imagen: {
        type: DataTypes.TEXT
    }

});

module.exports =  Productos;