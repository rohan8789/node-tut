const express = require("express");
// const path = require("path");
const app = express();

app.use(express.static("./public"));

app.all("*", (req, res) => {
  res.status(404).send("Resource not available");
});

app.listen(5000, () => {
  console.log("server is up and running");
});
