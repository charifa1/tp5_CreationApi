const bookController = require('./controllers/LivreController');

async function routes(fastify, options) {
    fastify.register(async function (fastify, options) {
        fastify.get('/books', bookController.getAllBooks);
        fastify.get('/books/:id', bookController.getBookById);
        fastify.post('/books', bookController.createBook);
        // Ajoutez d'autres routes si nécessaire
    });
}

module.exports = routes;
