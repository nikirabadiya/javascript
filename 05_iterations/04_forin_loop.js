const myObj = {
	js: "Javascript",
	cpp: "C++",
	vb: "Ruby",
	swift: "Swift by Apple",
};

// Basic syntax
// for (const key in object) {
//   if (Object.prototype.hasOwnProperty.call(object, key)) {
//     const element = object[key];

//   }
// }

for (const key in myObj) {
	// console.log(key); // return only keys, not values
}

for (const key in myObj) {
	// console.log(myObj[key]); // return the values of the keys
}

for (const key in myObj) {
	// console.log(`${key} is the shortcut for ${myObj[key]}`);
}

const programming = ["js", "ruby", "java", "cpp"];

for (const key in programming) {
	// console.log(key); // it will return the keys of the arrays, not the value which starts from 0
}

for (const key in programming) {
	// console.log(programming[key]); // it will now return the values as forof loop
}

const map = new Map();
map.set("IN", "India");
map.set("FR", "France");
map.set("USA", "Unites States of America");

for (const key in map) {
	// console.log(key); // map is not iterable for forin loop
}
