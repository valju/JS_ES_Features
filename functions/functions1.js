/*jslint browser:true*/
/*global console*/

console.log("*********************************");
console.log("********** functions 1 **********");
console.log("*********************************");

// https://developer.mozilla.org/en-US/docs/Glossary/Function
// e.g. "...A function in JavaScript is also an object..."

// Function Statement / (function declaration).   Basically
// foo1 and foo2 are the same, actually internally both turned to
// foo2 way anyway. 
function foo1(a, b) {
    "use strict";
    var c = a + b;
    return c;
}

// foo2 way is recommended, as this is what happens anyway,
// just more control for the programmer. 
// With a var that will be assigned a Function Expression.
var foo2 = function (a, b) {
    "use strict";
    var c = a + b;
    return c;
};

foo1(3,4);
foo2(3,4);

// ****************************************************************************

// function that defines a function and returns that function (object)
var foo3 = function (d) {
    "use strict";
    if(d===true) {
        return function(text) {
            console.log("Truthful text: " + text);
        };
    } else {
        return function(text) {
            console.log("Alternative truth text: " + text);
        };
    }
};

// calling both functions on one row:
foo3(true)("It's morning.");

// ... or with two lines
var foo3b = foo3(true);
foo3b("It's morning.");

// extra example
foo3b = foo3(false);
foo3b("I love mornings.");
console.dir(foo3b.prototype);
// ****************************************************************************

// IIFE = Immediately Invoked Function Expression 
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// (Invoked = We define and call, right away)
// (((Incorrect old alias = SIAF = Self-Invoking Anonymous Function, FORGET!)))
// (((Incorrect old alias = SEAF = Self-Executing Anonymous Function, FORGET!)))

// Learn just this intuitive syntax, even if JSLint.com doesn't like it
/*global console*/
(function () {
    "use strict";
    console.log("Hello from IIFE!");
})();

// Real example, the learnable way, not liked by JSLint.com
/*global console*/
(function (name) {
    "use strict";
    console.log("Hello " + name);
})("Joe");

// Why / when / how could you benefit from using IIFE?

// ****************************************************************************

// Calling a function without providing all of its arguments
// Let's say a is obligatory and b optional
// (Optional parameters omitted from the end of the parameter list!)
var foo4 = function (a, b) {
    "use strict";

    var c;
    b = Number(b);

    if(Number.isNaN(b)) {
        c = a;
    } else {
        c = a + b;
    }
    return c;
};

console.log("foo4(3,4): " +foo4(3, 4));
console.log("foo4(3): " +foo4(3));

// Calling function without _all_ of it's parameters
// Let's say b is always needed and a sometimes not
var foo5 = function (a, b) {
    "use strict";
    var c;
    a = Number(a);

    if(Number.isNaN(a)) {
        c = b;
    } else {
        c = a + b;  
    }
    return c;
};

console.log("foo5(3,4): " + foo5(3, 4));
console.log("foo5(null,4): " + foo5(null,4));   
// null or any other NaN would do here.

var fooFromSomeFramework = function (func) {
    "use strict";
    func(2,3);   // Framework calls the given function with two parameters
};

// If we need to define an event handler or something,
// And the system wants to give us two arguments
// but we don't need the _first_ one(s), _ is sometimes
// used as the _name_ of the non-needed parameter
// (Just a custom by programmers to tell the readers that
//  they don't use parameter _ for anything)
var bar6 = function (_, num) {
    "use strict";
    console.log("Underscored number squared: " + (num*num) );
};

fooFromSomeFramework(bar6);