const express = require('express');

const app = express();

const { products } = require('./data');

app.get('/', (req, res) => {
  return res.send('<h1>Home page</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  return res.json(newProducts);
});

app.get('/api/products/:productID', (req, res) => {
  // console.log(req);
  // console.log(req.params);

  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send('Product does not exist');
  }
  return res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/reviewID', (req, res) => {
  return res.send('Hello');
});

app.get('/api/v1/query', (req, res) => {
  console.log(req.query);
  return res.send('Hello');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
