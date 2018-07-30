var http = require('http');
var fs = require('fs');
var path = require('path');
var port = '7890';
var root = '/';

var mimetypes = {
  ".json": "application/json",
  ".js": "application/javascript",
  ".html": "text/html",
  ".css": "text/css"
};

var server = http.createServer(function(req, res) {
  if(req.url[0] === '/') {
    var requestedFileUrl = req.url.substr(1);
    if (req.url === '/') requestedFileUrl = "index.html";
    var requestedFileExt = path.extname(requestedFileUrl);
    var file = fs.readFile(__dirname + root + requestedFileUrl, function(err, content) {
        if(err) {
          console.log("file not found: " + requestedFileUrl);
        }
      console.log('file read: ' + requestedFileUrl);
      res.writeHeader(200, {"Content-Type": mimetypes[requestedFileExt] || 'plain/text'});
      res.end(content);
    });
  }
}).listen(port, function() {
  console.log("Server running at https://localhost:" + port);
});
