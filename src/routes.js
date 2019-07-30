const express = require('express');
const routes = express.Router();

 // Primeira rota
const ProductController = require('./controllers/ProductController')
routes.get("/products", ProductController.index);
routes.post('/products', ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.get("/products/:id", ProductController.show);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;    