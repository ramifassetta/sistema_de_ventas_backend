import Categorias from '../models/categoria.js';

const getAllCategories = async (req, res) => {
    try {
        const categorias = await Categorias.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createCategory = async (req, res) => {
    const { nombre } = req.body

    try {
        const categoria = await Categorias.create({
            nombre
        });
        res.status(201).json(categoria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getCategoryById = async (req, res) => {
    try {
        const categoria = await Categorias.findByPk(req.params.id);
        if (categoria) {
            res.json(categoria);
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCategory = async (req, res) => {
    const { nombre } = req.body; // Desglosar los datos
    const { id } = req.params

    try {
        // Buscar la categoría por ID
        const [updated] = await Categorias.update({
            nombre
        }, {
            where: { id } // Usar el ID desde los parámetros de la solicitud
        });

        if (updated) {
            // Si se actualizó, obtener la categoría actualizada
            const updatedCategory = await Categorias.findByPk(req.params.id);
            res.json(updatedCategory); // Retornar la categoría actualizada
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' }); // Si no se encontró la categoría
        }
    } catch (error) {
        res.status(400).json({ message: error.message }); // Manejo de errores
    }
};


const deleteCategory = async (req, res) => {
    try {
        const deleted = await Categorias.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default {
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
};
