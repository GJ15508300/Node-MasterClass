const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let fileName = "." + q.pathname;
    fs.readFile(fileName, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);

// http://localhost:8080/summer.html
// http://localhost:8080/winter.html
