import { DataTypes } from "sequelize";
import db from "../config/db.js";

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

export default Categorias;