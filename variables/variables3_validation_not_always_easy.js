/*jslint browser:true*/
/*global console*/

console.log("**********************************************");
console.log("*********** checking 'input' value ***********");
console.log("**********************************************");

// AN IDEA OF HOW COMPLICATED INPUT VALUE VALIDATION MIGHT GET

// IN THIS CASE FINALLY THE ACCEPTED ONES WOULD
// BE Number values from 0 to 5.
// Note: Of them 0 is Falsy, others (1-5) Truthy !!!
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy  
// The rest of the values are Truthy => if(value) {//This done}

// Types = Data types of JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures


// SO THIS CODE WON'T WORK YET!!! E.g. for the case of   true   
// the conditions should be changed.
// COMPLETE THE CODE LOGIC AND TEST IT AT HOME

// From web page we get: String (or undefined. Is null possible?)
// From http request to REST API we get: String (or undefined. null possible?)
// From deserialized JSON: e.g. object/null/undefined/Number/String
// From somebody else's code we get: Any value below is possible

var array = [
    // falsy values:
    false,
    null,
    undefined,
    0,
    NaN,
    '',
    "",
    ``,
    document.all,

    // possible special cases:
    "true",
    "false",
    true,      // was commented out, as the true handling missing
    " ",

    // 'normal' input data possibilities from web page
    // or JSON. Then even numbers usually first as text
    "abc",
    " abc ",
    "two",
    "-1",
    "0",
    "1",
    1,
    "4",
    "5",
    " 5 ",
    5,
    "6",
    "ö",

    // Regular expression,(RegExp) is also a JavaScript 
    // data type. Thus let's test one regexp value. 
    // Should not be accepted:
    
    /[\u0400-\u04FF]+/g,    
];

for(let i=0; i<array.length; i++) {
    let inputText = array[i];
    // let inputTrimmed = inputText.trim(); // Might be extra in JS
    let number = Number(inputText);

    // "falsy logic version" = taking out problems
    // It only has OR => if any is true, doesn't check the next one at all!!
    // "Shortcut evaluation"
    if( (!inputText && inputText !==0) || typeof(array[i])==="boolean" ||
        (typeof(inputText)==="string" && inputText.trim().length===0) || 
        Number.isNaN(number) || 
        number < 0 || 
        number > 5 ) {
        
        // If the 'falsy' version 
        if(typeof(array[i])==="string") {
            console.log("problem: >'" + inputText 
                        +"'< with number conversion into: " +number);
        } else {
            console.log("problem: >" + inputText 
                        +"< with number conversion into: " +number);
        }
        
    }

    // ifs are not connected, and that's on purpose, for demonstration

    // "truthy logic version" = the correct 0-5 values
    if( inputText && 
        (typeof(inputText)==="string" && inputText.trim().length!==0) && 
        !Number.isNaN(number) && 
        number >= 0 && 
        number <= 5 ) {
            if(typeof(array[i])==="string") { 
                console.log("correct: *'" + inputText 
                            +"'* with number conversion into: " +number);
            } else {
                console.log("correct: *" + inputText 
                            +"* with number conversion into: " +number);
            }
        }

    // BTW. first making this an if-else if-else if structure the
    // debugging would show better where each value goes
}