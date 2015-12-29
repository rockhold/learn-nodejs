var http = require('http');

// createServer takes in a callback to handle request events being emitted
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world\n');
}).listen(1337, '127.0.0.1');