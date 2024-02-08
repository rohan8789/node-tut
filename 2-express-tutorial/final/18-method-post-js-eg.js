const express = require("express");
const { people } = require("./data");
const app = express();

//importing all the form static information. yes, something that we have seen in nav-app-express
app.use(express.static("./method-public"));

//parse incoming request with urlencoded payloads
app.use(express.urlencoded({ extended: false }));

//parse incoming json, used for post req
app.use(express.json());

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.send(`Welcome ${name}`);
  }
  return res.status(401).send("Please enter your name");
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, user: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json("Please provide name");
  }
  res.status(201).json({ success: true, person: name });
});

app.listen(5000, (req, res) => [
  console.log("server is up and running on server 5000"),
]);
