var http = require('http');
var fs = require('fs');

var reqHandler = function(req, res) {
    if(req.url == "/index") {
        var data = fs.readFileSync('index.html');
        res.write(data.toString());
        res.end();
    } else if(req.url == "/login") {
        var data = fs.readFileSync('login.html');
        res.write(data.toString());
        res.end();
    } else {
        res.write('Invalid request....');
        res.end();
    }
}

var server = http.createServer(reqHandler);
server.listen(3000);