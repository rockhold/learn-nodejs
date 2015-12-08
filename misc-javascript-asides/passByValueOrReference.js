// pass by value (for primitives)
function change(b) {
    b = 2;
}

var a = 1;
change(a);
console.log(a);

// pass by reference (for objects)
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}

var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);


function reassignObj(d, e) {
    d = e;
}

var e = "some string";
var f = "some other string";
reassignObj(e, f);
console.log(e);
e = f;
console.log(e);