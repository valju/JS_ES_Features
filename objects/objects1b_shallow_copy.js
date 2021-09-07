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

// Deep or shallow copy?
// Deep copy = everything duplicated and thus separated from original
// Shallow copy = just first level reference variables are separate,
// but references point at same original objects!
