var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');
var gzip = zlib.createGzip();

// Performs the same function as the below code. Simplifies writing from one stream to another.
readable.pipe(writable);

// readable.on('data', function (chunk) {
//     writable.write(chunk);
// });

// Can chain steams with pipes.
readable.pipe(gzip).pipe(compressed);