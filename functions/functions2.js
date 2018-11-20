/*jslint browser:true*/
/*global console*/

console.log("*************************************************************");
console.log("********** functions 2 - arrow function expression **********");
console.log("*************************************************************");

// Array functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
/*
    "An arrow function expression has a shorter syntax than a function 
    expression and does not have its own this, arguments, super, or 
    new.target. These function expressions are best suited for non-method 
    functions, and they cannot be used as constructors."
*/

let fooar1 = () => {
    console.log("Hello!");
}

fooar1();

// With exactly one parameter, the parameter list
// parenthesis can be left out. (But not for 0, 2 or more)
let fooar2 = name => {
    console.log("Hello " + name + "!");
}

fooar2("Joe");

// IIFE with arrow function
let a,b,c,d;

// Two ways to write same IIFE. 
// 1. Anonymous function defined with arrow notation
// 2. No params -> empty parameter list ()
// 3. implicit = automatic return because no block { } brackets
// Returns value 42
// That anonymous function is immediately called with the second ()
// Where to put the wrapper (    ) around seems to be a debatable thing...

// ... the style accepted by jslint.com, but does it work? Forget this!     
(()=>42());    // Definition & call
var returnedValue1 = (()=>42());  // Definition&call, return value to console

// Second style used in most of the examples => Learn this, easier to grasp
(()=>42)();    // Definition & call
var returnedValue2 = (()=>42)();  // Definition&call, return value to console

//console.log(   (name => "Hello " + name("Joe"))   );
console.log(   (name => "Hello " + name)("Joe")   );


// Remember about arrow functions:

// 1. parameter list options
// 0 parameters:        ()
// 1 parameter:         (name) or name  
// 2 or more parameters ()


// 2. if no function body {  } then 
// automatic return of one value created/defined after =>

// 3. if the created value is adhoc object, then
// (   ) are needed around the object, otherwise confused for a block:
() => ({a:123, b:456})

// 4. if using the keyword 'this', the this refers to the outer object
// and not to the function object itself!
// -> sometimes you need arrow function, and normal would not work!!!

console.log("Put a break point here for stopping the debugger");
