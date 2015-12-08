var greet = require('./greet1');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();

// Note - When using the pattern which replaces module.exports with a new object, each call to require will return the same instance. This is illustrated below by requiring greet3 a second time, but changing the value of the greeting property before calling the greet function on the second object. This is due to the module already being cached in module.js. The new greet3b object below is just another reference to the object that was created for greet3 above. This holds true across multiple javascript files. This can be used to create a singleton.
var greet3b = require('./greet3');
greet3.greeting = 'Changed hello world!';
greet3b.greet();

// This pattern would allow multiple instances to be created, which differs from the approach above.
var Greet4 = require('./greet4');
var greeter = new Greet4(); // Since greet4 returns a function constructor
greeter.greet(); 

var greet5 = require('./greet5').greet;
greet5();