const Productos = require("../models/Productos");

const getAllProducts = async (req, res) => {
    try {
        const productos = await Productos.findAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createProduct = async (req, res) => {
    // Desglosar datos del cuerpo de la solicitud
    const { nombre, categoria_id, precio, imagen } = req.body;

    try {
        // Crear un nuevo producto utilizando los datos desglosados
        const producto = await Productos.create({
            nombre,
            categoria_id,
            precio,
            imagen
        });

        // Responder con el producto creado
        res.status(201).json(producto);
    } catch (error) {
        // Manejar errores
        res.status(400).json({ message: error.message });
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const producto = await Productos.findByPk(id);
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    const { nombre, categoria_id, precio, imagen } = req.body; // Desglosar los datos
    const { id } = req.params

    try {
        // Buscar el producto por ID
        const [updated] = await Productos.update({
            nombre,
            categoria_id,
            precio,
            imagen
        }, {
            where: { id } // Usar el ID desde los parámetros de la solicitud
        });

        if (updated) {
            // Si se actualizó, obtener el producto actualizado
            const updatedProduct = await Productos.findByPk(req.params.id);
            res.json(updatedProduct); // Retornar el producto actualizado
        } else {
            res.status(404).json({ message: 'Producto no encontrado' }); // Si no se encontró el producto
        }
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
};


const deleteProduct = async (req, res) => {
    try {
        const deleted = await Productos.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
};
