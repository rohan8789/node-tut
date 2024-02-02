const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    // res.end()
  } else if (req.url === "/about") {
    res.end("Welcome to our about page");
    // res.end()
  } else {
    res.end(`
            <h1>Sorry</h1>
            <p>page not found</p>
            <a href="/">Back Home</a>
        `);
  }
});

server.listen(5000);
