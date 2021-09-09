const array1 = [1, 2, 3, 4];
const myReducer = (previousValue, currentValue) => {
  	console.log("previousValue:"+previousValue+", currentValue:"+currentValue);
	return (previousValue + currentValue);
};

// 1 + 2 + 3 + 4
console.log(array1.reduce(myReducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(myReducer, 5));
// expected output: 15

