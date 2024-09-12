// array

const myArray = [0, 1, 2, 3, 4, 5];

const myHeros = ["Shaktiman", "Captain"];

const newArray = new Array(1, 2, 3, 4);

// Array methods

// myArray.push(6); // add the value in the array to the last of the position
// myArray.pop(); // Remove the last value of the array

// myArray.unshift(9); // add the value in the array to the start of the position
// myArray.shift(); // Remove the first value of the array

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

// const newArr = myArray.join(); // Converts the array values to the sting format
// console.log(myArray);
// console.log(newArr);

// Slice and splice

console.log("A ", myArray); // A  [ 0, 1, 2, 3, 4, 5

const newArr = myArray.slice(1, 3);
console.log(newArr); //[ 1, 2 ]

console.log("B ", myArray); // B  [ 0, 1, 2, 3, 4, 5 ]

const newArr1 = myArray.splice(1, 3);
console.log(newArr1); // [ 1, 2, 3 ]

console.log("C ", myArray); //C  [ 0, 4, 5 ]

// Difference between slice and splice
/*
Slice does not include the last number of range i.e. in above ex. it will not give the value at 3rd position. Splice includes the last number of range i.e. in above ex. it will give the value at 3rd position. 

But the main difference of it is, slice operation will not manipulate the original array, but splice will manipulate the original array and the values will be removed from the original array which we asked in the splice.
*/
