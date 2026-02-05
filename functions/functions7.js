// Optional chaining examples x 2.5
const adventurer = {
    name: "Alice",
    cat: {
        name: "Dinah",
    },
    dog: {},
    greeting: (name) => "Hello " + name + "!"
};

// now below protection against inexisting, undefined, or null 'dog'
// and e.g. incomplete 'dog' object like {} or like {breed:"Golden retriever"}

const dogName = adventurer.dog?.name?.toString();
console.log(dogName);
// Expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// Expected output: undefined

console.log(adventurer.greeting?.("Joe"));
// Works if greeting function (object's method) exists, otherwise 'undefined'
// A bit like in IIFE when we grab hold of a functin object and
// then call it right away. ? checks did we grab a proper function
// or undefined or null. 