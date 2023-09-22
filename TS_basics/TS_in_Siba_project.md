# TypeScript features found in siba-fe or Siba_be source code:

- interface
- inheritance for interfaces with 'extends'. Including members of previously defined interface.

- variable type definitions after :
- function return type definitions after :
- function parameter type definitions after :

- optional parameters by writing ? after the parameter name
- type assertions with as   (pet as BirdPet)
- type assertions with type unions ( xyz as JwtPayload | string)

- the lenient/broad type: any
- Generic types with type parameters, normal <T> or multiple, e.g. <T<U>>,
- in .ts you import from .js files (but still write the export too to a .ts file!)
- string and not String, number and not Number in TS:
https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html

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

----------------------------------------- 
# ECMAScript features to be added 
ES2020:
Optional chaining: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining 
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
1:Sparky, 2:undefined, 3:undefined, 
4:null, 5:undefined, 6:undefined
---
terniary operator - conditional operator
---
promises and chaining functions that return something of same type as previous, so next function call can be added.


