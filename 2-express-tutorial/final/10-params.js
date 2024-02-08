const express = require("express");
const { products, people } = require("../data");
const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, image, name } = product;
    return { id, image, name };
  });
  res.json(newProduct);
});

app.listen(5000, () => {
  console.log("Server is listening to port: 5000");
});

//we learnt how to access minimal data of products
