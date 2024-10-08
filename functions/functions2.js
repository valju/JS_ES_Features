/*jslint browser:true*/
/*global console*/

console.log("*************************************************************");
console.log("********** functions 2 - arrow function expression **********");
console.log("*************************************************************");

// Arrow functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
/*
    "An arrow function expression has a shorter syntax than a function 
    expression and does not have its own 'this', arguments, super, or 
    new.target. These function expressions are best suited for non-method 
    functions, and they cannot be used as constructors."
*/

let fooar1 = () => {
    console.log("Hello!");
};

fooar1();

// With exactly ONE parameter, the parameter list
// parentheses COULD BE left out. (But not for 0, 2 or more)
// But, we should never optimize writing speed. 
// Most likely with () faster to recognize/read/understand/validate/audit
let fooar2 = name => {
    console.log("Hello " + name + "!");
};

fooar2("Joe");

// What are these???
(() => 42)();

(abc => abc+42)(11);                //   => 53


// IIFE with arrow function

// 1. Anonymous function defined with arrow notation
// 2. No params -> empty parameter list ()
// 3. implicit (= automatic) return because of no block { } brackets
// Returns value 42
// That anonymous function is immediately called with the second ()
// Definition & call, though returned 42 goes nowhere... Anyway valid JS

var returnedValue2 = (() => 42)(); // Definition & call, return value to a variable
console.log("Meaning of life " + returnedValue2);

console.log((() => 42)()); // Tricky test for code reader :)

(() => {
    return 42;
})(); // The same IIFE A bit longer way, with explicit return

console.log(((name) => "Hello " + name)("Joe")); // IIFE version 1
console.log((name => "Hello " + name)("Joe")); // IIFE version 2


// REMEMBER THESE _FOUR FACTS_ about arrow functions:

// 1. parameter list options:
//   0 parameters:        ()
//   1 parameter, Note!:  name  OR  (name)   <= I prefer the second  
//   2 or more parameters (x,y)

// 2. if no function body {  } then 
// automatic return of one value created/defined after =>

// 3. if the created value is an adhoc object, then
// extra (   ) are needed around the object, otherwise 
// {} would be confused for the function body (block):
() => ({
    a: 123,
    b: 456,
})
// () => {a:123, b:456}   // This would be a problem!

// 4. if using the keyword 'this' in ARROW function, the 'this' refers
// to the outer object and not to the function object itself! 
// useful: Sometimes you need arrow function, and normal would not work!!!
// (In traditional function code, 'this' refers to the function object
// itself. Big difference and also typical source of mistakes!)
// Typically in some kind of event-handler function (React, Redux) we MUST
// use arrow function and otherwise similar traditional function would not work.

// this = self-reference to object itself. In other languages: this, self, object, ...

console.log("Put a break point here for stopping the debugger");


/*   Minor thing:

// This code with arrow function IIFE takes 11-13 characters to write
let answer = (()=>42)();

// Writing THE SAME with traditional syntaxt takes 24-26 more
// = 39 characters altogether. Of course only very short
// functions have this huge 3 x bloating <> network js-file download benefit.

let answer = (function () {
    return 42;
})();

*/

// Random, but important example of many things:
// - filter function creating a new array out of the selected/matching items
// - passing the selection function (object) to the filter function
// - arrow function with implicit return
// - skipping first parameter with dummy parameter name _ 
// - skipping the third parameter (reference to original array) by not defining it

const peopleArray = ['Adam', 'Bertha', 'Cecily', 'Elvis', 'Lewis', 'Mike'];
const firstTeam = peopleArray.filter((_, index) => index % 2 === 0);
console.log("*** Every second name ***");
console.dir(firstTeam);

// firstTeam array is like this: ['Adam', 'Cecily', 'Lewis']
// as they had even indexes 0,2,4

// Second example, now also Bertha and Feodor would be included, as when the callback
// is called for them, it will return now true, as the string lengths are 6 = even number
const otherTeam = peopleArray.filter((item, index) => index % 2 == 0 || item.length % 2 == 0);
console.log("*** Every second name, plus even number length names ***");
console.dir(otherTeam);

// Third example, using also the whole array, when looking at each item one by one (filter
// calls the callback for each item one by one. _ replacing index that we do not use)
const longNameTeam = peopleArray.filter((value, _, array) => {
    let longerNameFound = false;

    for(let i=0; i<array.length && !longerNameFound; i++) {
        if(value.length < array[i].length) {  //  && index != i  Sometimes needed, NOT here    
            longerNameFound = true;                          // because length < length
        }                                                    // so for oneself won't be true:
    }                                                        // "Bertha".length < "Bertha".length
                                                             // will be false
    return !longerNameFound;
});
console.log("*** Longest length name(s) ***");
console.dir(longNameTeam);

// Fourth example, using also the whole array, when looking at each item one by one (filter
// calls the callback for each item one by one)
const sameNameTeam = peopleArray.filter((value, index, array) => {
    let sameNameFound = false;

    for(let i=0; i<array.length; i++) {
        if(value === array[i] && index != i ) {  // index != i is sometimes needed, e.g here 
            sameNameFound = true;                          // becaus value == array[i]
        }                                                  // for oneself :
    }                                                      // "Bertha" == "Bertha" (same slot)
                                                           // will be true, trivial comparison
    return sameNameFound;
});
console.log("*** Team with namesakes ***");
console.dir(sameNameTeam);