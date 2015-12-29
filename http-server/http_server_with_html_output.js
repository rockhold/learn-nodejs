var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Reads the html file and returns it as a string (by way of specifying the encoding)
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    
    // Transforms the content in the html file, replacing a specified template string with content
    // from this js file...
    var message = 'Dynamically generated text...';
    html = html.replace('{Message}', message);
    
    res.end(html);
}).listen(1337, '127.0.0.1');