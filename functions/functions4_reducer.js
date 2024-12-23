const array1 = [-2, -1, 3, -4];

const myReducer = (balanceSoFar, nextValue) => {
	if(nextValue>=0) {
		return balanceSoFar+1;
	} else {
		return balanceSoFar-1;
	}
};

let initialValue = 0;

// 1 + 2 + 3 + 4
console.log(array1.reduce(myReducer,initialValue));
// expected output: 10

// 1,2 => 3
// 3,3 => 6
// 6,4 => 10
// our reducer function run 3 times! (because no initial value given, first used as initial)

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(myReducer, 5));
// expected output: 15

// 5,1 => 6
// 6,2 => 8
// 8,3 => 11
// 11,4 => 15  
// our reducer function run 4 times! (because initial value given, first used as first nextValue)