// Calling require will result in module.exports being returned, not the variable 'exports' which was also defined in greet.js.
var greet = require('./greet');

// Calling the below method would result in an error, as module.exports (which is now assigned to 'greet' is an empty object).
//greet();

var greet2 = require('./greet2');
greet2.greet();