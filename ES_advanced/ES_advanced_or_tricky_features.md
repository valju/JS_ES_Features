# ECMAScript - Advanced or tricky features

Needed e.g. in React frontend and NodeJS backend development as part of your TypeScript code.

These features also appear in library code examples. Thus to learn how to use some modern React feature,
you'll need to be able to read, understand and later modify these ES features.

<br />

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

<br />

## ECMAScript ES5 (2009), (ES6) ES2015, and beyond




<br />

## TypeScript core features are listed elsewhere

https://github.com/valju/JS_ES_Features/blob/master/TS_basics/TS_in_a_fullstack_project.md



