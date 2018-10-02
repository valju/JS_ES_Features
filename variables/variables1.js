/*jslint browser:true*/
/*global console*/

console.log("********************************************");
console.log("*********** variables and scopes ***********");
console.log("********************************************");

// Two global variable
var a;         // variable defined, value undefined
var b = 3;     // variable defined, value defined
//var f;      // This would fix the implicit global scope var prob

// Function definition (~function creation)
function variable_foo(c, d) {
    "use strict";
    var e;   // variable would be _hoisted_ here anyway
    // c and d are function parameters, i.e. function-scope
    // variables that might get value from caller

    e = c + d;    // e is a function-scope variable
    console.log("e: " + e);

    f = e * 2;    // f is _implicit_ global scope variable f (Bad!!!)
    // Of course 'var f;' could be written in another file.
    // But all in all we _try_ to avoid using global scope variables.

    console.log("f: " + f);
}

a = 6;

// c = 11;  // This is an error! Undeclared/undefined 'c'
// e = 13;  // This is an error! Undeclared/undefined 'e'
f = 15;     // This is bad coding, (implicit global scope var)
console.log("f after function:" + f);
// Function call (~invocation, execution)
variable_foo(a, b);