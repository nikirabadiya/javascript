function camelize(str) {
	return str
		.split("-") // splits 'my-long-word' into array ['my', 'long', 'word']
		.map(
			// converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
			(word, index) => {
				// console.log(word[0].toUpperCase(), word.slice(1));
				return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
			}
		)
		.join(""); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
console.log(camelize("my-long-word")); // myLongWord

function filterRange(arr, a, b) {
	return arr.filter((item) => item >= a && item <= b);
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered); // [3, 1]

function byField(fieldName) {
	return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}
let users = [
	{ name: "John", age: 20, surname: "Johnson" },
	{ name: "Pete", age: 18, surname: "Peterson" },
	{ name: "Ann", age: 19, surname: "Hathaway" },
];
console.log(users.sort(byField("age")));
console.log(users.sort(byField("name")));
