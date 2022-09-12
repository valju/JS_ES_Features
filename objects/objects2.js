/*jslint browser:true*/
/*global console*/

console.log("***********************************************************");
console.log("*********** objects 2 - Destructuring assignments *********");
console.log("***********************************************************");

// some local scope starts (some block for no other reason,
// though could be e.g. some function or object) 
{
    // Creating a local variable (let) and an object to it:
    let a = {abc:123, def:456, ghi:789,};
    // note the trailing/final comma, not error since ES6
    // => allows e.g. generators create code easier as
    // last line/item is identical with others

    // DESTRUCTURING ASSIGNMENT ANALYZED
    // Defining three local consts with the const { } structure
    // to the local scope!
    // => here {a,b,c} confusingly doesn't mean creating an object!
    const {
        ghi,
        def,
        abc,
        //xyz, // This went through in Firefox, but will get value: undefined
     } = a;  // Destructure the object a to each const !!!
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring

    console.log("abc: " + abc);  // Prints from local const abc
    // abc++;   // This would be an error, cannot change const abc

    // Just creating a new object, with names of fields coming 
    // from those local consts, and also values. See how this differs.
    let b = {
        def,
        abc,
        ghi,
    };

    console.log("Put a break point here to see the values in the debugger");
}

// console.log("abc: " + abc);  // This would be an error, out of scope
console.log("Put another break point here to see the values in the debugger");

/*
    // The example from above...
    // ... could be written also like this:
    const ghi = a.ghi;
    const def = a.def;
    const abc = a.abc;

    // In React examples, the whole destructing assignment is usually laid out on one line:
    const { ghi, def, abc, } = a;
*/

/*  Testing: What happens if the const structure defines a const xyz, without
    giving it a value. 

    let a = {abc:123, def:456, ghi:789,};

    const {
        ghi,
        def,
        abc,
        xyz, // This went through in Firefox, but will get value: undefined
    } = a;  // Group assignment from object a to each const !!!

    // Just quick and dirty testing the missing property 
    // => do not use this or similar hazardous without:
    // 1. reading the ECMAScript standard 2. testing extensively

    console.log("The value of const xyz: " +xyz);
*/

/*   Similar way, BUT this time destructuring an Array

// Creating a local variable (let) and and object to it:
    let b = [123, 456, 789,];

    // Defining three local consts with the destructure structure
    // to the local scope!
    // => here [a,b,c] again confusingly means something else than creating an (array) object!
    const [jkl,mno,prq] = b;  // Destructure the array a to each const !!!
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring

    // ... could be written also like this: (Wouldn't make any sense, of course
    // using hardcoded indexes!)
    const jkl = b[0];
    const mno = b[1];
    const prq = b[2];
*/

/*
    // consider React component that is defined with the function code below:

const MyComponent = ({items, user}) => { 
    //........ then more stuff here ..........
    items.forEach((item, index)=>{........});
}

    // 1. What happens here?    Hint: Not the same as    {a,b}  we had before, {a:a, b:b}
    // 2. What are 'items' and 'user'? 
    // 3. Where do they get their values from? 
    // 4. Are they 'var', const or let?

    // The component written in function way, gets props as parameter
    // This component seems to get props.items and props.user as props from the parent

    // A little bit same as:    const {items, user} = props         right?
    // ... but in function parameter lists we cannot say var, const nor let
    // => we get function-scoped vars 'items' and 'user' automatically
*/