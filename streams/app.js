var fs = require('fs');

// ReadStream defined within fs.js and inherits from Readable.
// Prototype chain is ReadStream -> Readable -> Stream -> EventEmitter.
// Specifying the encoding option for the encoding results in a string being returned, while
// specifying the highWaterMark sets the size of the buffer (in bits). The buffer size is
// 64 * 1024 (or 64 bytes), by default.
var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// Since ReadStream ultimately inherits from EventEmitter, we can specify events of which we want to
// be notified.
readable.on('data', function (chunk) {
    // Logs out the length of the string being read. If the length of the file is larger than the 
    // stream's buffer, it will end up notifying of multiple events (and therefore printing 
    // multiple times.)
    console.log(chunk.length);

    // Copies the string being read in to another file, whose path is defined above.
    writable.write(chunk);
});