// for of

// ['', '', '']
// [{}, {}]

// basic syntax
// for (const element of object) { // here object is not the typical object we use, it defines on which thing we want to take a loop

// }

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
	// console.log(num);
}

const greetings = "Hello world!";

for (const greet of greetings) {
	// console.log(`Each char is ${greet}`);
}

// Maps

// we can give or set the keys and entries as we do in objects, and it will return us the object having those values and in the order we have set them, MOST IMPORTANT thing is it will give unique values only even if there would be any duplicate values, then it will ignore it

const map = new Map();
map.set("IN", "India");
map.set("FR", "France");
map.set("USA", "Unites States of America");
map.set("IN", "India"); // It will not include this entry as map indicates the unique values, not duplicates

// console.log(map);

for (const key of map) {
	// console.log(key);
	// it will return all the value in array like the below
	// [ 'IN', 'India' ]
	// [ 'FR', 'France' ]
	// [ 'USA', 'Unites States of America' ]
	// Which we don't want, we want each separate key and values so we do it like the below method
}

for (const [key, value] of map) {
	// this is the syntax if we want key and values to be separately printed, kind of destructuring the object
	// console.log(key, ":-", value);
}

const myObj = {
	game1: "NFS",
	game2: "PUBG",
};

for (const [key, value] of myObj) {
	// console.log(key, ":-", value); // it will throw an error as the typical object is not iterable or we can not take a loop to this object like this, this forof loop works for map object
	/* 
	to run a loop on a object easily like it run on array, we generally use forin loop instead of forof loop 
	*/
}
