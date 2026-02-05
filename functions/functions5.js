// Example of three different ...    :s

let func1 = (a, ...b) => {
    let something = { ...a };
    foo(...b);
};

// All these three ... have different meanings. 
// Can you link these features in order of appearance
// 1. 2. and 3. to the explanations a)-c) below?
// a) spread operator used to spread object properties
// b) spread operator used to spread items of an array
// c) the "rest" parameter/argument collection of function
// the "rest" here meaning the rest of the flexible
// number of parameters. (And NOT to REST API, not at all)

// Real life example from a 
// React Native/Expo/Zustand Frontend project code:
// Here all three different meanings for ... are used on 
// just two lines, third and fourth.

/*
export const useThemeStore = create()(
    persist(
        (...a) => ({
            ...createThemeSlice(...a),
        }),
        {
            name: "theme-storage", // storage key
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
*/

// TEMP, need to build a full example soonish

console.log("------ Object initially --------");
const obj = { foo: 11, bar: 22 };
console.log({ ...obj });


const func2 = (someObj, ...a) => {

    console.log("------ 'rest of the parameters' array. and spreading it with array spread --------");
    console.log("log the a array:" + a);
    console.log("dir the a array:\b");
    console.dir(a);
    console.log("log the a array as JSON:" + JSON.stringify(a));

    console.log("log the a array spread:");
    console.log("\b");
    console.log(...a);
    console.log("log the a array spread as JSON:" + JSON.stringify(...a));

    console.log("------ using the Object spread operator --------");

    let something = { ...someObj, extra: "Hello!" };
    console.log("log the new object: ");
    console.log(something);
    console.log("dir the new object:\b");
    console.dir(something);
};

func2(obj, 3, 4, 5);


