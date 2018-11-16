/*jslint browser:true*/
/*global console*/

console.log("**************************************************");
console.log("********** functions 3 - default values **********");
console.log("**************************************************");

// Default parameter values for functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

var sum = function (num1, num2=3) {
    var result = num1 + num2;
    return result;
}

console.log(sum(4,3));          // Will print 7
console.log(sum(4));            // Will also print 7, as num2 defaults to 3 if not given
console.log(sum(4,undefined))   // Will also print 7, as num2 defaults to 3 if num2 undefined

console.log(sum(4,null));       // Won't default to 3, but turns null into 0 => 4+0=4

console.log("Put a break point here for stopping the debugger");
