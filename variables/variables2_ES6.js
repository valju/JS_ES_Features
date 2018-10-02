/*jslint browser:true*/
/*global console*/

console.log("*********************************************");
console.log("*********** let, const and scopes ***********");
console.log("*********************************************");

// Function definition (~function creation)
function variable2_foo(c, d) {
    "use strict";
    let g = 5;   // function scope let variable
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let 

    if(g>0) {
        let h = 7;
        console.log("h: " + h);
    }

    //console.log("h outside the if: " + h); // Error, h is if block scoped 
    // "ReferenceError: h is not defined"
}

//console.log("g after function:" + g); // Error, g doesn't exist in this scope
// "ReferenceError: g is not defined"

// Function call (~invocation, execution)
variable2_foo(a, b);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const 
// const is same as let (scope is NOT global or function, it's: local)
// Local scope means inside the outer { and  } marks, or inside for
// for( let i=i; i<10; i++ ) { console.log(i); }

// BUT for const the immediate value is constant:

const i = 55;
// i++;  // "TypeError: Assignment to constant variable." i++ means i=i+1

// With objects it's a bit more complicated
const j = {firstName:"Joe", lastName:"Smith"};
//j = {firstName:"Ann", lastName:"Jones"};   // Error!!!
// TypeError: Assignment to constant variable.
// We cannot change the value of const j, which is reference
// to the first object.

// But, the non-immediate, next-level, values are NOT protected 
// with const!!!
j.firstName="Ann";
j.lastName="Jones";

console.log("Put a break point here for stopping the debugger");

