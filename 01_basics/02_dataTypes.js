"use strict"; // treat all js code as newer version

let score = "33a";

// console.log(typeof null); // object
// console.log(typeof score); // string

/* CONVERSION OF DATATYPES */

let valueInNumber = Number(score); // will convert the score into number

// console.log(valueInNumber, typeof valueInNumber); // NaN (Not a Number), number
// "33" => 33
// "33a" => NaN
// true => 1
// false => 0

let isLoggedIn = "hitesh";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true
// 1 => true, 0 => false
// "test" => true, "" => false

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber); // 33
// console.log(typeof stringNumber); // string

/************************ OPERATION ********************/
let value = 3;
let negValue = -value;
// console.log(negValue); // -3

let str1 = "test";
let str2 = " another";

let str3 = str1 + str2;
// console.log(str3); // test another

// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32
// if two different datatypes want to convert than JS will automatically change the datatype of every element to the datatype of the first element of the group

console.log(+true); //1
console.log(+""); // 0
/* Not recommend to use this ↑ kind of operation */

let gameCounter = 100;
gameCounter++; // 101 (postfix)
++gameCounter; // 101 (prefix)
console.log(gameCounter); // 101

//Symbol example
const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId); // false
// Symbol works for unique element or component that's why instead of having same value, the comparison result is false

// Primitive
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Reference (Non Primitive)
// Array, Objects, functions
