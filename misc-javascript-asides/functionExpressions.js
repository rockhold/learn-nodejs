// function statement
function greet() {
    console.log('hi');
}

greet();

// functions are first-class; can be passed as variables
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

// function expression
var greetMe = function () {
    console.log('Hi Brandon');
};

greetMe();

// function expressions are still first-class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function() {
    console.log('Hello Brandon!');
});