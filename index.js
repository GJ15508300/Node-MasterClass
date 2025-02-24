// var http = require("http");
// var dt = require("./myFirstModule");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(`The date and time are currently : ${dt?.myDateTime()}`);
//     res.end("Hello World");
//   })
//   .listen(8080);

// //Split Query
// var http = require("http");
// var url = require("url");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     var q = url.parse(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.end(txt);
//   })
//   .listen(8080);

// // http://localhost:8080/?year=2017&month=July

const http = require("http");
const fs = require("fs");
http
  .createServer(function (req, res) {
    fs.readFile("demoFile1.html", function (err, data) {
      if (err) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("Error File");
        return res.end();
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
