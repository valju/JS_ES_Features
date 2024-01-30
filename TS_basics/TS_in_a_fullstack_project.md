# TypeScript features found in siba-fe or Siba_be source code:

- interface   https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#interfaces

- inheritance for interfaces with 'extends'. Including members of previously defined interface.   https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces 

- variable type definitions after : https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables

- function parameter type definitions after : https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions

- function return type definitions after : https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#return-type-annotations

- optional parameters by writing ? after the parameter name https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties

- union types https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

- type assertions with as   (pet as BirdPet) https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions

- type assertions with type unions ( xyz as JwtPayload | string)

- Literal types https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types

- the lenient/broad/avoidable/temporary type 'any' https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#any

- unknown type https://www.typescriptlang.org/play#example/unknown-and-never


- Generic types with type parameters, normal
```<T>```      https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types
or multiple, e.g. 
```<T<U>>```
- in .ts you import from .js files (but still write the export too to a .ts file!)
- string and not String, number and not Number in TS:
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

let myResponse : Response<number> = 
     {success:true, data:[2,3,7]};
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
1)dog : {name:"Sparky"},
2)dog : undefined,
3)dog : null,
4)dog : {name:null},
5)
6)dog : {nickname:"Spotty"},

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

Using promises by chaining function calls that return something of same type as previous, so next function call can be added:  

Knex example: https://knexjs.org/guide/query-builder.html#leftouterjoin

