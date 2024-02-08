const express = require("express");
const logger = require("./middleware/logger");
const app = express();

app.use("/api", logger);

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/api/products", (req, res) => {
  res.send("products");
});

app.get("/api/items", (req, res) => {
  res.send("items");
});

app.listen(5000, () => {
  console.log("server is up and running on 5000");
});
