const Categorias = require('../models/Categorias');

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
    const { nombre } = req.body; 
    const { id } = req.params

    try {
        // Buscar la categoría por ID
        const [updated] = await Categorias.update({
            nombre
        }, {
            where: { id } 
        });

        if (updated) {
            const updatedCategory = await Categorias.findByPk(req.params.id);
            res.json(updatedCategory); 
        } else {
            res.status(404).json({ message: 'Categoría no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message }); 
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

module.exports = {
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
};
