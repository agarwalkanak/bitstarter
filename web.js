var express = require('express');

var app = express.createServer(express.logger());

fs = require('fs');
var buffer = new Buffer(fs.readFileSync("index.html", "utf-8"));
app.get('/', function(request, response) {
  response.send(buffer.toString("utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
