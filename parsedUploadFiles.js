let http = require("http");
const formidable = require("formidable");

http
  .createServer(function (req, res) {
    console.log("res.url", res.url);

    if (res.url == "/fileupload") {
      let form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        res.write("File Uploaded");
        res.end();
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action=fileupload method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="fileUpload"> <br>');
      res.write('<input type="submit">');
      return res.end();
    }
  })
  .listen(8080);
