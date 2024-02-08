const express = require("express");
const logger = require("../middleware/logger");

const app = express();

//Rather than passing middleware to each function, We pass it using app.use();
app.use(logger);

app.get("/", (req, res) => {
  res.send("Home page");
  console.log("Home page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
  console.log("about page");
});

app.get("/contact", (req, res) => {
  res.send("Contact page");
  console.log("contact Page");
});

app.listen(5000, () => {
  console.log("app is up and running on server 5000");
});
