# TypeScript features found in siba-fe or Siba_be source code:

- **interface**   https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#interfaces

- inheritance for interfaces with '**extends**'. Including members of previously defined interface.   https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces 

- **variable type definitions** after : https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables

- **function parameter type definitions** after : https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions

- **function return type definitions** after : https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#return-type-annotations

- **optional parameters** by writing ? after the parameter name https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters 

- **optional properties** by writing ? after the property name https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties 

- **union types** https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

- **type assertions with as**   (pet as BirdPet) https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions

- **type assertions with type unions** ( xyz as JwtPayload | string)

- **Literal types** https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types

- **any** - the lenient/broad but avoidable temporary type 'any' used while moving from ES to TS https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#any

- **unknown** type https://www.typescriptlang.org/play#example/unknown-and-never

- ... then in code ... **type narrowing** https://www.typescriptlang.org/docs/handbook/2/narrowing.html 
https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards
https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing 

- **Generic types** with type parameters, normal
```<T>```      https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types
 
```
// or multiple, e.g.

<T, U> 

// or nested:

<T<U>>
```

- Note: **In some module systems and TS configurations** in .ts code files you **import from .js files** (but still write the export too in a .ts file!)

- ES export & import augmented by TS **export type** / **import type**. Then only the types are imported to be used in type checking, but not the implementation = not the objects (e.g. function objects).
https://www.typescriptlang.org/docs/handbook/2/modules.html#import-type
https://www.typescriptlang.org/docs/handbook/2/modules.html#inline-type-imports 

- Write **string** and not String, **number** and not Number in TS (apart from constructors, **then** ***S***tring(42), ***N***umber("42") )
https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html

- Object types are possibly not yet used in our example case code? https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#object-types 

```
// One example with the most commonly used TS features
function identity(arg : number, urg? : string) : number {
  let something : any = 234;
  return arg;
}

export interface Response<T> {
  success: boolean;
  data: T[];
}

// Type parameter T will be replace by the real type 
// you want to use

let myResponse : Response<number> = {
  success: true, 
  data: [2,3,7]
};

```

---
---
---

# ECMAScript features to be studied 

## Optional chaining (ES2020): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining 
```
const adventurer = {
  name : "Admundsen",
  country : "Denmark",
  dog : {name:"Sparky"},        // option 1
  //dog : undefined,            // option 2
  //dog : null,                 // option 3
  //dog : {name:null},          // option 4
  //                            // option 5, not even mentioning dog
  //dog : {nickname:"Spotty"},  // option 6

};

const dogName = adventurer.dog?.name;
console.log(dogName);  
```
Answers below:  

Spoiler alert 1

These would be printed in the cases 1-6:

Spoiler alert 2

---

1. Sparky
2. undefined
3. undefined
4. null
5. undefined
6. undefined

---
Old JS: 

## Ternary operator - conditional operator   

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator

```
a ? b : c 

//   (if a is true) ? (then do/return b) : (otherwise do/return c)
```

---
## Using Promise based operations

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises 

Promise chains pass the value returned by one callback to the next
callback. A callback may return a value of a different type or another
promise. If it returns a promise, the chain waits for that promise:
```
fetch("/api/user")
  .then(response => response.json())
  .then(user => {
    console.log(user.name);
  })
  .catch(error => {
    console.error(error);
  });
```



## Method chains that look like promises, but aren't. Function call returns
query builder that can be further called by another method. Knex example: 
https://knexjs.org/guide/query-builder.html#leftouterjoin
```
knex('users')
  .groupBy('count')
  .orderBy('name', 'desc')
  .havingRaw('count > ?', [100]);
```

// Note: Knex query builders are also thenable, so `await` or
`.then()` can execute the built query. So you can use promises around this 
last example.

## More TS features:
- import type
- Record<key, value>