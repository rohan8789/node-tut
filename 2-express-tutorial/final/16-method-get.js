const express = require("express");
const { people } = require("./data");
const app = express();

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, user: people });
});

app.listen(5000, (req, res) => [
  console.log("server is up and running on server 5000"),
]);
