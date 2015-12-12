var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt', function (err, data) {
    // Common node pattern of using 'error-first callbacks' where first param is an error (if exists), 
    // or undefined if not.
    if (err) {
        return;
    }
    
    // Unless specifying an encoding when calling readFile, a Buffer is returned
    console.log(data);
    
    // The contents of the Buffer can be logged by calling toString()
    console.log(data.toString());
});

// Due to the async nature of readFile, this line will likely be ran before the callback executes
console.log('Done!');