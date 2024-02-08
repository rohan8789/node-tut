const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./navbar-app-html/index.html", "utf8");
const homeStyles = readFileSync("./navbar-app-html/styles.css");
const homeLogo = readFileSync("./navbar-app-html/logo.svg");
const homeLogic = readFileSync("./navbar-app-html/browser-app.js");

const server = http.createServer((req, res) => {
  //home
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  //about
  else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  }
  //styles
  else if (req.url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  //logo
  else if (req.url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeLogo);
    res.end();
  }
  //logic js
  else if (req.url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>404 not found</h1>");
    res.end();
  }
});

server.listen(5000);
