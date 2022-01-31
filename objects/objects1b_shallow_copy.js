/*jslint browser:true*/
/*global console*/

/* ************************************************************************ */

console.log("*********************************");
console.log("*********** objects 1b **********");
console.log("****** deep or shallow copy? ****");
console.log("*********************************");

let aa = {name:"Mike", yob:2001}; 
let bee = {name:"Joe", yob:1966};
let cee = [aa, bee];
let copy = [...cee];

// You tried to make a separate copy and keep all
// original information safe. Any problems?
// You'll need to draw the objects and references to see.

// Deep or shallow copy?
// Deep copy = everything duplicated and thus separated from original
// Shallow copy = just first level reference variables are separate,
// but references point at same original objects! (After cee and copy
// which naturally are the first, and only separated level.)
