const express = require("express");
const { products, people } = require("../data");
const app = express();

app.get("/", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log("server is up and running...");
});

//Now on browser we can see all the content of data file. and it can be accessed from anywhere in this world
