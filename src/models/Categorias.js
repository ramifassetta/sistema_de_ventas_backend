const { DataTypes } = require('sequelize');
const db = require('../config/db.js');

const Categorias = db.define("categorias", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(30),
        allowNull: false
    },

});

module.exports = Categorias;