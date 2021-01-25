/*jslint browser:true*/
/*global console*/

console.log("********************************************");
console.log("*********** variables and scopes ***********");
console.log("********************************************");

// Two global variables https://developer.mozilla.org/en-US/docs/Glossary/Scope 
var a;         // variable defined, value undefined
var b = 3;     // variable defined, value defined
//var f;       // This would fix the implicit global scope var prob   = G

// Function definition (~function creation)
function variable_foo(c, d) {
    "use strict";
    var e;   // variable would be _hoisted_ here anyway
    // c and d are function parameters, i.e. function-scope   =  F   (GF)
    // variables that might get value from caller
    // https://developer.mozilla.org/en-US/docs/Glossary/Hoisting 
    // "Planned Parameters" c and d

    // c = c + 3; // you could use the parameter variable as any local var
    e = c + d;    // e is a function-scope variable
    console.log("e: " + e);

    f = e * 2;    // f is _implicit_ global scope variable f (Bad!!!)
    // Of course 'var f;' could be written in another file.
    // But all in all we _try_ to avoid using global scope variables.
    
    g = 7;   // Another implicit global scope var created (even if in func!)

    console.log("f: " + f);
    c = 7;
}

a = 6;


f = 15;     // This is bad coding, (implicit global scope var)
console.log("f after function definition:" + f);

// Function call (~invocation, execution) happens after all definitions
// 
variable_foo(a, b);        // "Actual Arguments" values of a and b
console.log("f after function call:" + f);
// c = 11;  // This is an error! Undeclared/undefined 'c'
// e = 13;  // This is an error! Undeclared/undefined 'e'


/*  Example of how VARIABLE HOISTING sometimes makes things tricky:

nameX = "Joe";      // implicit global scoped 'var'
                    // example would work same if here: var nameX = "Joe";

func zoo() {
                               // <= here _hoisted_: var nameX;
    nameX ="Mike"              // thus this refers to f-scoped, not global

    for(var i=0; i<10; i++) {
        var nameX = "Sue";         // this will become actually:  nameX = "Sue";
    }
}

zoo();

*/
