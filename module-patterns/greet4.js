// Pattern - replace module.exports with a function constructor
function Greeter() {
    this.greeting = 'Hello world!!';
    this.greet = function () {
        console.log(this.greeting);
    };
}

module.exports = Greeter;