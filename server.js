const express = require('express');
const app = express();
const port = 3000;

const oiController = require('./src/controllers/oi.controller');
const UController = require('./src/controllers/user.controller');
const PController = require('./src/controllers/product.controller');
app.use(express.json());

app.get('/oi', oiController.sayOi);

// Users request
app.post('/users', (req, res)=> {
  UController.createUser(req, res);
})

app.get('/users', (req, res) => {
  UController.findAll(req, res);
});

app.get('/users/:id', (req, res) => {
  UController.findById(req, res);
});

app.put('/users/:id', (req, res) => {
  UController.updateUser(req, res);
});

app.delete('/users/:id', (req, res) => {
  UController.deleteUser(req, res);
});

// Products requests
app.post('/products', (req, res)=> {
  PController.createProduct(req, res);
})

app.get('/products', (req, res) => {
  PController.findAll(req, res);
});

app.get('/products/:id', (req, res) => {
  PController.findById(req, res);
});

app.put('/products/:id', (req, res) => {
  PController.updateProduct(req, res);
});

app.delete('/products/:id', (req, res) => {
  PController.deleteProduct(req, res);
});

app.listen(port, () => {
  console.log(`A API está rodando em http://localhost:${port}`)
})