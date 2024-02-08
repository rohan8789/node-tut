const express = require("express");
const app = express();

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //res.send("testing")
  next();
};

app.get("/", logger, (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/about", logger, (req, res) => {
  res.send("About Page");
});

app.listen(5000, () => {
  console.log("server is running of server");
});
