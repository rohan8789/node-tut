const express = require("express");
const { products, people } = require("../data");

const app = express();

//1 home
app.get("/", (req, res) => {
  res
    .status(200)
    .send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

//2. product page
app.get("/api/products", (req, res) => {
  console.log(req.params);
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});

//3.  :productID --> You can call this whatever gibbrish you want to call it
app.get("/api/products/:productID", (req, res) => {
  // console.log(req);
  console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find((product) => {
    if (product.id === Number(productID)) {
      return product;
    }
  });
  if (!singleProduct) {
    res.status(404).send("404 Page not find");
  }
  res.json(singleProduct);
});

// 4. Query string Parameter (complex params)
app.get("/api/v1/Query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).send("No product found");
  }
  res.json(sortedProducts);
});

//0
app.listen(5000, () => {
  console.log("server is up and running at port 5000");
});
