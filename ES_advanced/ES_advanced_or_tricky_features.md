# ECMAScript - Advanced or tricky features

Needed e.g. in React frontend and NodeJS backend development as part of your TypeScript code.

These features also appear in library code examples. Thus to learn how to use some modern React feature,
you'll need to be able to read, understand and later modify these ES features.

Some are even older than ES5 (2009), but are tricky. The focus is on the features that are 1. tricky, 2. risky, 3. confusing, 4. treacherous, 5. difficult, 6. error-prone, or all of those.

Reliables links of information are provided. Only read as much from each link as is needed for understanding. You can use the feature in the "Try it" code playground if need to test your understanding.  

<!-- ---------------------------------------------------------------------- -->
<hr />

## Older versions of ECMAScript/JavaScript already have some things you need to master

### Until ES6 we only had problematic ‘var’
- with only two possible scopes: function and global.
- function scope with var hoisting that did cause some risks if not coding well.
- with implicit global vars, which was bad style (just use a variable without ever defining it)

### let

Block-scoped variable. Accessible only in the block where it is defined. But do you really need a variable? 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

### const

Block-scoped constant (the first immediate value needs to be assigned right away and will be constant, e.g. the object reference. But the _contents_ of that object and so on are not protected by const!).

Actually in our programming about 90-95% of our 'variables' are getting one value and never changing after that. => We should use consts.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

### JavaScript/ECMAScript and Java only have pass-by-value, no pass-by-reference

Warning: This is explained wrong 90% of the times in the internet!

For many programmers it must be confusing to pass values that are references and still understand that it IS pass-by-value! When we pass the value of the reference variable, a reference, it’s still pass-by-value.

Here it's explained correctly: https://sentry.io/answers/java-pass-by-reference-or-value/
Shortcut to the picture: https://33fa1ur95-ddf15660f.sentry.dev/static/054e2cecc9697591e99c7c1e2e991d17/d7ab4/heap3.png

Only if we would be able to pass a reference to that original reference variable itself, it would be pass-by-reference! (Then the function could change the value of the original variable, which is only rarely desirable). In JavaScript you CAN change the original object via the copy of the reference you get, but you CANNOT change the original variable.

Some languages DO have pass-by-reference. E.g. C/C++/C#. You can recognize the pass-by-reference from keywords next to function paramaters. Like 'out', 'inout', 'ref'. Or that parameter list has ```int& num1``` instead of ```int num1```, and so on in C. Then you are not expected to pass the value of the variable, but a reference to it.

### Shallow copy vs. Deep copy

Shallow copy (first layer of references/objects is duplicated as separate objects, but after that the references refer to original second layer objects = not completely independent copy). https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

Deep copy (all objects in the, even deeper object structure, are duplicated as separate objects and the original objects are safely separate) https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy 

Most of the library functions like e.g. sort() or filter() create a shallow copy of the array. So *beware of shallow copies* and don't accidentally modify same objects that the original array still refers to!

### arrow function syntax (and few differences)

- shorter syntax
- implicit return if no braces {}, (no 'curly brackets')
- reference 'this' does not refer to the function object itself, but to the object where the function was defined.
- no parenthesis () needed around parameter list if exactly one parameter. But writing them still might make code more readable
- always anonymous

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

What happens here?

```(() => 42)()```

1. defining an arrow function with implicit (=automatic) return of number value 42:   ```()=>42```

2. grabbing it with ```(       )```, and while having hold of it...

3. calling that function with the empty parameter list ```()```

This can be called IIFE (Immediately Invoked Function Expression, this time made with arrow function syntax)

### Array, Map and Set methods

There are many Array methods, here only the most common ones. Read the documentation for what happens with empty array and other special cases.

Here your code calls the Array method once, and often passes your code/function as input to that system method. The environment then internally calls your method as many times as needed.

Notice that most or all of these methods create shallow copies or otherwise point at the same second level objects as the original collection did!

The collection objects, see the "Methods"
(Array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
(Map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/)
(Set: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/)

#### .forEach() - 'vanilla function'
.forEach method for many kind of collections: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach

#### .map() - like previous and adds creation of a new 
.map method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

#### .filter() - finds items that meet criteria, and returns them
.filter method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

#### .some() - finds if any meet the criteria, and only returns the info, true or false
.some method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some 

#### .reduce() - most complicated to understand, for those who want challenge
.reduce method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

#### .slice() vs .splice()
.slice method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
.splice method (mutates the original array!) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

These ones are good examples for learning to read the documentation carefully.


<!-- ---------------------------------------------------------------------- -->
<hr />

## ECMAScript ES5 (2009), (ES6) ES2015, and beyond

### ES2015 Class syntax is skipped this time (nowadays functional approach is more common)

(((class syntax https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)))

(((class inheritance https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)))

(((A new way of defining methods (Methods: object-attached functions, object’s function members) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions#Description)))

### template literals

with backticks ``` `  ` ```and injecting JavaScript expressions with ```${ }``` to get rid of this kind of String concatenation clumsiness: ```"Hello" +name+"!" ```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

### spread operator

The spread notation/spread syntax ```...``` to make ‘a bit deeper, still shallow copy’ of an object, instead of the ‘totally shallow copy’. Copying goes one level deep = the properties/items of the original and copy object are separate. (But those separate properties/items may then contain references to exactly same objects) 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator


### ES2015 export and import from a module to another (default export or named export) 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

* Default export & import
    * in original.js ```export default someObj;``` // default export (one per module)
    * in file using.js ```import myObj from './original';``` // default import and naming it as ‘myObj’
* Named export & import
    * in original.js ```export someObj;``` // named export (multiple items possible)
    * in file using.js ```import {someObj as myObj} from './original';``` // same-named import and possible rename

* It replaced the OLD CommonJS way: https://en.wikipedia.org/wiki/CommonJS
    * in original.js module.exports = someObject; // OLD WAY. Exposing someObject as/from module )
    * in file using.js var copyOfSomeObject = require('/original.js'); // OLD WAY. getting an instance of it )

### extra trailing comma 

Trailing comma was allowed at the end of arrays (=lists) already in old JS ```[1,2,3,]```. ES5 added it to JS object literals ```{name:"Joe",yob:1986,}```and ES8(ES2017) to function calls and fuction definitions ```foo(2,3,)```; 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas

**NOTE**: JSON (=*text*) does not allow trailing comma: ```{"name":"Joe","yob":1986}```

### JS Object literal is not same as JSON!

JSON = just text, unless you do something to it. JS Object literal is *code* that generates JS Object to the running app memory when executed.

JS Object is in running app memory, JSON text could be saved on disk or sent over internet in HTTP requests.

You can convert between these two with JSON object functions. In some cases some libraries do it for you automatically.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json

### Computed property name

Property accessor used so that its name is not a hard-coded string like normally, but comes from a values of a variable:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names 

```this.setState({[event.target.name]: event.target.value});```

compare to this: ```this.setState({firstName: event.target.value});``` when the event target element's name was string "firstName". 

Another more simple example: ```{[a]:a,[b]:b}```. How to read that?

### short notation object literal

Object literal (ad hoc, on the spot created object with JavaScript code) of this kind: ```{ a }``` or ```{ a, b }``` which mean same as ```{ a : a }``` and ```{ a:a, b:b }```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015
Curiosity: In React JSX {{a}} means first going to JS mode using the outer { } and then having that shortened {a} object literal inside

<!-- ---------------------------------------------------------------------- -->
<hr />

## TypeScript core features are listed elsewhere

https://github.com/valju/JS_ES_Features/blob/master/TS_basics/TS_in_a_fullstack_project.md

## (in Finnish) TypeScript lecture here

https://github.com/haagahelia/ohke-teknologiat/tree/master/01_typescript

