exports = function () {
    console.log('Hello');
};

console.log(exports);

// Initially module.exports points to an empty object. When the function expression is invoked, module.exports is passed to the variable 'exports'. Both point to the same memory location. Due to a javascript quirk, though, using the equals sign above to assign a value to 'exports' actually results in it being assigned to a new value. This breaks the previous reference to the object defined by module.exports, so these two values are now pointing to different objects.
console.log(module.exports);