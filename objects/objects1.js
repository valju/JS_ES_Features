/*jslint browser:true*/
/*global console*/

console.log("*******************************");
console.log("*********** objects ***********");
console.log("*******************************");

var k = [];    // Empty array object created (+var defined + assigment)
var l = {};    // Empty object crated (+var defined + assigment)

{
    let a = "foo";
    let b = "bar"

    let c = {a,b};   // ad-hoc object created {a:"foo",b:"bar"}
    console.dir("c: " + c);

    let d = {a:a,b:b}; // Same result, just longer code
    console.dir("d: " + d);

    // Check this out! Used in some React code, if e.g. making same
    // event-handler to handle multiple fields same way
    let e = {[a]:a,[b]:b};  // ad-hoc object {foo:"foo",bar:"bar"}
    console.dir("e: " + e);

    let f = {...e};  // {} -> _new_ object created, 
    // ...e means copy all field names and values from e 
    // (...x is called the spread notation)

    let g = [2,4,6];  // array with three Number items created
    let h = g;        // h has a 2nd reference to the _same_ object

    let i = [...g];   // exact _copy_ of the array created
    let j = [...g, 8];   // _copy_ of the array, plus one more item added

    let k = {abc:true, xyz:false};  // object created
    let l = {...k};  // exact _copy_ of the object created
    let m = {...k};
    m.abc=false;
    let n = {...k, abc:false};   // replace field abc
    let o = {...k, def:123, abc:"foobarish"}; 
    // add field def, replace value of abc

    console.log("Put a break point here for stopping the debugger");
    
}
