/*jslint browser:true*/
/*global console*/

console.log("********************************************");
console.log("*********** checking input value ***********");
console.log("********************************************");

// NOT COMPLETED, BUT START OF AN IDEA OF HOW
// COMPLICATED INPUT VALUE VALIDATION MIGHT GET
// IN THIS CASE FINALLY THE ACCEPTED ONES WOULD
// BE Number values from 0 to 5.
// Note: 0 is falsy !!!

// SO THIS CODE WON'T WORK YET!!! 
// COMPLETE THE CODE AND TESTING AT HOME

var array = [
    undefined,
    null,
    "",
    " ",
    "abc",
    " abc ",
    "two",
    "-1",
    "0",
    "5",
    "6",
    "ö",
    "true",
    "false",
    true,
    false,
    " 5 ",
];

for(let i=0; i<array.length; i++) {
    let inputText = array[i];
    // let inputTrimmed = inputText.trim(); // Might be extra in JS
    let number = Number(inputText);

    // "falsy logic version"
    if(!inputText || inputText.trim().length===0 || Number.isNaN(number) || number < 0 || number > 5 ) {
        console.log("problem: >" + inputText +"< with number conversion into: " +number);
    }


    // "truthy logic version"
    if( inputText && inputText.trim().length!==0 && !Number.isNaN(number) && number >= 0 && number <= 5 ) {
        console.log("correct: *" + inputText +"* with number conversion into: " +number);
    }
}