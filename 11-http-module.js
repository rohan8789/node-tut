const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Welcome to our home page"); //you can directly use res.end() instead of res.write().
  res.end();
});

server.listen(5000);

//We will discuss about it in depth, later on...