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

export const useThemeStore = create < StoreState > ()(
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

// TEMP, need to build a full example soonish

const obj = { foo: 34, bar: 56 };
console.log({ ...obj });


const func2 = (obj, ...a) => {

    console.log(...a);
    console.log(a);
    console.log(JSON.stringify(a));

    let something = { ...obj, extra: "Hello!" };
    console.log(something);
    console.dir(something);
};

func2(3, 4, 5);


