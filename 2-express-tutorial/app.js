const express = require("express");
const { people } = require("./data");
const app = express();

//importing all the form static information. yes, something that we have seen in nav-app-express
app.use(express.static("./method-public"));

//parse incoming request with urlencoded payloads
app.use(express.urlencoded({ extended: false }));

//parse incoming json, used for post req
app.use(express.json());


app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, user: people });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.send(`Welcome ${name}`);
  }
  return res.status(401).send("Please enter your name");
});


app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json("Please provide name");
  }
  res.status(201).json({ success: true, person: name });
});


app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
});


app.listen(5000, (req, res) => [
  console.log("server is up and running on server 5000"),
]);
