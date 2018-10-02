/*jslint browser:true*/
/*global console*/

console.log("*******************************");
console.log("*********** objects 2 *********");
console.log("*******************************");

// some local scope (some block for no other reason) starts
{
    // Creating a local variable (let) and and object to it:
    let a = {abc:123, def:456, ghi:789,};
    // note the trailing/final comma, not error since ES6
    // => allows e.g. generators create code easier as
    // last line/item is identical with others

    // Defining three local consts with the const { } structure
    // to the local scope!
    // => here {a,b,c} confusingly doesn't mean creating an object!
    const {
        ghi,
        def,
        abc,   
    } = a;  // Group assignment from object a to each const !!!

    console.log("abc: " + abc);  // Prints from local const abc
    // abc++;   // This would be an error, cannot change const abc

    // Just creating a new object, with names of fields coming 
    // from those local consts, and also values
    let b = {
        def,
        abc,
        ghi,
    }
    
    console.log("Put a break point here to see the values in the debugger");
    
}

// console.log("abc: " + abc);  // This would be an error, out of scope
console.log("Put another break point here to see the values in the debugger");
