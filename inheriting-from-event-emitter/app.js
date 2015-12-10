var EventEmitter = require('events');
var util = require('util');

function Greeter() {
    // When the EventEmitter function constructor is invoked, it will allow any properties and 
    // methods added in the constructor to be available on all Greeter objects. This is similar
    // to calling the super constructor. If not done, then any properties initialized in the
    // EventEmitter would be undefined when attempted to be accessed from Greeter instances.
    EventEmitter.call(this);

    this.greeting = 'Hello world!';
}

// Sets up the prototype chain such that Greeter objects will inherit from EventEmitter
util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function (data) {
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
};

var greeter1 = new Greeter();
greeter1.on('greet', function (data) {
    console.log('Someone greeted!: ' + data);
});

greeter1.greet('Brandon');