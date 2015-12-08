// If the 'exports' variable is mutated rather than assigned, then both 'exports' and 'module.exports' will be two references to the same object.
exports.greet = function() {
    console.log('Hello');
};

console.log(exports);
console.log(module.exports);