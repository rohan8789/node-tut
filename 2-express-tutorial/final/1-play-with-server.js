const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req.method); //This tells what request user has made.
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Home Page</h1>");
    res.end();
  } else if (req.url === "/about") {
    console.log("i am hit, help");
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Bad request, Page not found</h1>");
    res.end();
  }
});

server.listen(5000);
