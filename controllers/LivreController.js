// LivreController.js
const Book = require('../models/Book');

const getAllBooks = async (request, reply) => {
    try {
        const livres = await Book.find();
        reply.send(livres);
    } catch (err) {
        reply.code(500).send(err);
    }
};

const getBookById = async (request, reply) => {
    try {
        const livre = await Book.findById(request.params.id);
        if (!livre) {
            reply.code(404).send({ message: 'Livre non trouvé' });
            return;
        }
        reply.send(livre);
    } catch (err) {
        if (err.name === 'CastError') {
            reply.code(400).send({ message: 'ID invalide' });
            return;
        }
        reply.code(500).send(err);
    }
};

const createBook = async (request, reply) => {
    try {
        const livre = new Book(request.body);
        await livre.save();
        reply.code(201).send(livre);
    } catch (err) {
        reply.code(500).send(err);
    }
};

module.exports = { getAllBooks, getBookById, createBook };
