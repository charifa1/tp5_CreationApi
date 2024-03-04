// models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String },
    format: { type: String, enum: ['poche', 'manga', 'audio'], default: 'poche' }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
