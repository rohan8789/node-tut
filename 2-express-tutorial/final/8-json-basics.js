const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json([{ name: "Rohan" }, { name: "Saloni" }]);
});

app.listen(5000, () => {
  console.log("Server is up and running...");
});

//Now we can access this data from anywhere in the world...
