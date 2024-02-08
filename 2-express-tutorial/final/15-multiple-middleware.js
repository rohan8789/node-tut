const express = require("express");
const authorize = require("./middleware/authorize");
const logger = require("./middleware/logger");
const app = express();

// app.use([logger, authorize]);

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/api/products", (req, res) => {
  // console.log(req.user);
  res.send("products");
});

app.get("/api/items", [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send("items");
});

app.listen(5000, () => {
  console.log("server is up and running on 5000");
});
