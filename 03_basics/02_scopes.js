let a = 300;

if (true) {
	let a = 10;
	const b = 20;
	var c = 30;
	// console.log(`Inner`, a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
	const userName = "test";

	function two() {
		const website = "youtube";
		// console.log(userName);
	}

	// console.log(website);

	two();
}

one();

if (true) {
	const userName = "test";
	if (userName === "test") {
		const website = " youtube";
		// console.log(userName + website);
	}
	// console.log(website);
}

// console.log(userName);

/* Interesting */
console.log(addOne(5)); //
function addOne(num) {
	return num + 1;
}

addTwo(6);
const addTwo = function (num) {
	return num + 2;
};
