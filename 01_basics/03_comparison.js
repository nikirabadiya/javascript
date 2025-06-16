// console.log("2" > 3); // false // automatically convert 2 to number
// console.log("02" < 3); // true

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true

/* 

The reason of above result it that an equality check == and comparison > < >= <= works differently.

Comparison converts null to number, treating it as a 0 that's why 1st is false as 0 > 0 is false and 3rd is true as 0 >= 0 would be true but for 2nd scenario, null will not be converted to the number that's why the result is false.

*/

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// AVOID THE COMPARISON OF THE ABOVE 2 TYPE - NULL AND UNDEFINED

/*
Strict check (===) will check both values and datatypes
*/
console.log("2" === 2); // false as the datatype is not the same
