/*jslint browser:true*/
/*global console*/

console.log("*********************************");
console.log("********** functions 2 **********");
console.log("*********************************");

// Array functions coming

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

(()=>42());

(()=>42)();

