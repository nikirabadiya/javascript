const name = "test";
const repoCount = 50;

// console.log(name + repoCount + " Value"); // test50 Value

// String interpolation
// console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

// Another way to declare the string
const gameName = new String("Pekka");
// console.log(gameName[0]); // P
// console.log(gameName.__proto__); // {} // to get the prototypes of the string
// console.log(gameName.length); // 5
// console.log(gameName.toUpperCase()); // PEKKA
// console.log(gameName.charAt(2)); // k
// console.log(gameName.indexOf("k")); // 2

let string1 = "test-chacha";

let newStr = string1.slice(0, 4); // will slice the string from the start to end char position without including the last position
let newStr1 = string1.slice(-5, 8); // if given negative value then it will start from the reverse direction from the start point and the end point too
let newStr2 = string1.substring(0, 4); // will convert the string from start position to end postion but will not include the last position i.e. here 0 to 4 position is test but will not include '-' character as it is on 4th position BUT WE CAN NOT INPUT NEGATIVE VALUES UNLIKE SLICE

// console.log(newStr); // test
// console.log(newStr1); // ha
// console.log(newStr2); // test

let newString = "   Nik     "; // will trim the whitespace of the string
// console.log(newString.trim()); // Nik

let url = "https://test.com/the%20game"; // it will replace the characters with the given characters
// console.log(url.replace("%20", "-")); // https://test.com/the-game

// console.log(url.includes("rre")); // false

console.log(string1.split("-")); //[ 'test', 'chacha' ] // will split the string based on the given character i.e. here it is '-' character
