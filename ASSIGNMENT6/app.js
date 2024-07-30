// app.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let products = [];
let currentId = 1;

// Create a new product
app.post('/products', (req, res) => {
    const product = { id: currentId++, ...req.body };
    products.push(product);
    res.status(201).send(product);
});

// Get all products
app.get('/products', (req, res) => {
    res.send(products);
});

// Get a single product by ID
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.send(product);
});

// Update a product by ID
app.put('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');

    Object.assign(product, req.body);
    res.send(product);
});

// Delete a product by ID
app.delete('/products/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).send('Product not found');

    products.splice(productIndex, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
