// Immediately invoked function expression
(function (lastname) {
    var firstname = 'John';
    console.log(firstname);
    console.log(lastname);
}('Doe'));

// firstname here is a different scope than that in the function above
var firstname = 'Jane';
console.log(firstname);