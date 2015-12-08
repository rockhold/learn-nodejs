// Pattern - Replacing exports object with new object using object literal syntax. Called the 'revealing module pattern' in which you expose only the properties and methods you want via a returned object. This is a very common and clean way to struture and protect code within modules.
var greeting = 'Hello world!!!!';

function greet() {
    console.log(greeting);
}

module.exports = {
    // This only exposes the function, not the variable...
    greet: greet
};