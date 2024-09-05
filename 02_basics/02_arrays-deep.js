const marvel = ["Thor", "Ironman", "Spiderman"];
const dc = ["Superman", "Batman", "Flash"];

// marvel.push(dc); // ['Thor', 'Ironman', 'Spiderman', ['Superman', 'Batman', 'Flash']]
// console.log(marvel);
// console.log(marvel[3][1]);

// const all = marvel.concat(dc); // ['Thor', 'Ironman', 'Spiderman', 'Superman', 'Batman', 'Flash']
// console.log(all);

// Spread operator method - mostly used method to join 2 or more arrays
// const allNew = [...marvel, ...dc]; // ['Thor', 'Ironman', 'Spiderman', 'Superman', 'Batman', 'Flash']
// console.log(allNew);

// const newArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const realArray = newArray.flat(Infinity); // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth i.e. here we have given Infinity, so it will concat all sub array in one array
// console.log(realArray);

// console.log(Array.isArray("test")); // will check it the given value is array or not i.e. here it is not so it will return boolean value as false

// console.log(Array.from("test")); // will convert the value into array i.e. here it will become - ['t', 'e', 's', 't']

// console.log(Array.from({ name: "test" })); // will return empty array [] as we will have to give it keys or values so that it can convert the array according to the given keys or values

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Returns a new array from a set of elements i.e. [100, 200, 300]
