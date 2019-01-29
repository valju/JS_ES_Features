/*jslint browser:true*/
/*global console*/

console.log("*********************************");
console.log("********** functions 1 **********");
console.log("*********************************");

// https://developer.mozilla.org/en-US/docs/Glossary/Function
// e.g. "...A function in JavaScript is also an object..."

// Function statement / (function declaration)
// foo1 and foo2 mean the same, actually internally both turned to
// foo2 way anyway. 
function foo1(a, b) {
    "use strict";
    var c = a + b;
    return c;
}

// foo2 way is recommended, as this is what happens anyway,
// just more control for the programmer. 
// With a var that will be assigne a function expression.
var foo2 = function (a, b) {
    "use strict";
    var c = a + b;
    return c;
};

foo1(3,4);
foo2(3,4);

// function that defines a function and returns that function (object)
var foo3 = function (d) {
    "use strict";
    if(d===true) {
        return function(text) {
            console.log("Truthful text: " + text);
        };
    } else {
        return function(text) {
            console.log("Altenative truth text: " + text);
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


// IIFE = Immediately Invoked Function Expression 
// (Invoked = We define and we call, right away)
// Not so good alias = SIAF = Self-Invoking Anonymous Function
// Not so good alias = SEAF = Self-Executing Anonymous Function
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE

// Learn the first syntax, even if JSLint.com doesn't like it
/*global console*/
(function () {
    "use strict";
    console.log("Hello from SIAF/IIFE!");
})();

/*global console*/
(function () {
    "use strict";
    console.log("Hello from SIAF/IIFE!");
}());


// Real example, the learnable way, not liked by JSLint.com
/*global console*/
(function (name) {
    "use strict";
    console.log("Hello " + name);
})("Joe");

// Confusing second version, liked by JSLint.com
/*global console*/
(function (name) {
    "use strict";
    console.log("Hello " + name);
}("Joe"));

// Calling function without all of it's parameters
// Let's say a is obligatory and b optional
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
console.log("foo5(3): " + foo5(3));

var foo6 = function (func) {
    "use strict";
    func(2, 3);
};

// If we need to define an event handler or something,
// And the system wants to give us two arguments
// but we don't need the _first_ one(s), _ is sometimes
// used as the name of the non-needed parameter
var bar6 = function (_, num) {
    "use strict";
    console.log("Number squared: " + (num*num) );
};

foo6(bar6);