# ECMAScript - Advanced or tricky features

Tasks - Create a PDF and put there the code exerpts and your brief text answers.
Spend max 20 mins per point.

Research target: The case project or learning project you are given

<!-- ---------------------------------------------------------------------- -->
<hr />

## Older versions of ECMAScript/JavaScript already have some things you need to master

### Until ES6 we only had problematic ‘var’

1a) Try to find vars or implicit global vars. TypeScript tools should take care of these,
tslint/eslint/biome should find vars and implicit global vars and suggest them be consts/lets. 

**Hints:** biome. Or "Find in folder" for the src folder only, and match case, match word and look for var. Or a ' = '

### let and const

1b) Try to find any lets that should be const? Most of the variables we use in programming should be consts, not lets,
as they are given value once, and never change after that.

**Hints:** Same as above.

### JavaScript/ECMAScript and Java only have pass-by-value, no pass-by-reference

1c) Find a place where an object reference is passed in function/method call. It's pass-by-value, but passed value is the object reference.

**Hints:** Possibly search for [ character possibly, possibly, telling that an array/list has been created and see if it's passed around to a function.

### Shallow copy vs. Deep copy

1d) Find a place in code where an object is copied for secondary purpose. E.g. there can be the original collection object and then a copy made for analysis or filtering. Is the copy shallow or deep? Is there any risk the original objects are corrupted?  

**Hints:**  E.g. when you see ...   In some cases also when {    or   [  has been used,
but those are used for so many other things in TS/ES that it would take many search hits to find one where a copying happens.