const express = require("express");
const app = express();

//Home page
app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page</h1>");
});
//About Page
app.get("/about", (req, res) => {
  res.status(200).send("<h1>About Page</h1>");
});
//Contact Page
app.get("/contact", (req, res) => {
  res.status(200).send("<h1>Contact page</h1>");
});

//Invalid Page
app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not available</h1>");
});

app.listen(5000, () => {
  console.log("server is up and running");
});
