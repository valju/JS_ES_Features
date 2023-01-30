const array1 = [1, 2, 3, 4];

const myReducer = (previousValue, currentValue) => {
  	console.log("previousValue:"+previousValue+", currentValue:"+currentValue);
	return (previousValue + currentValue);
};

// 1 + 2 + 3 + 4
console.log(array1.reduce(myReducer));
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