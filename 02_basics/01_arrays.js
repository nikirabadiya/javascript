// array

const myArray = [0, 1, 2, 3, 4, 5];

const myHeros = ["Shaktiman", "Captain"];

// Alternate way to declare the array
const newArray = new Array(1, 2, 3, 4);

// Array methods

// myArray.push(6); // [0, 1, 2, 3, 4, 5, 6] // add the value in the array to the last of the position
// myArray.pop(); // [0, 1, 2, 3, 4, 5] // Remove the last value of the array

// myArray.unshift(9); // [9, 0, 1, 2, 3, 4, 5] // add the value in the array to the start of the position
// myArray.shift(); // [0, 1, 2, 3, 4, 5] // Remove the first value of the array

// console.log(myArray.includes(9)); // false
// console.log(myArray.indexOf(3)); // 3
// console.log(myArray.indexOf(9)); // -1 // if the value doesn't exist in the array then it will give the '-1' as an result

// const newArr = myArray.join(); // Converts the array values to the sting format
// console.log(myArray); // [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); // 0,1,2,3,4,5

// Slice and splice

console.log("A ", myArray); // A  [ 0, 1, 2, 3, 4, 5 ]

const newArr = myArray.slice(1, 3);
console.log(newArr); //[ 1, 2 ]
console.log("B ", myArray); // B  [ 0, 1, 2, 3, 4, 5 ]

const newArr1 = myArray.splice(1, 3);
console.log(newArr1); // [ 1, 2, 3 ]
console.log("C ", myArray); // C  [ 0, 4, 5 ]

// Difference between slice and splice
/*
Slice does not include the last number of range i.e. in above ex. it will not give the value at 3rd position. Splice includes the last number of range i.e. in above ex. it will give the value at 3rd position. 

But the main difference of it is, slice operation will not manipulate the original array, BUT splice will manipulate the original array and the values will be removed from the original array which we asked in the splice.
*/
