// if

const isUserLoggedIn = true;

// <, >, <=, >=, ==, !=, ===, !==

// if (2 == "2") {
// 	// compares only values without comparing the datatype so it will be true
// 	console.log("executed");
// }

// if (2 === "2") {
// 	// compares values along with the datatype so it will be false and will not enter the in the loop
// 	console.log("executed");
// }

// const temperature = 41;
// if (temperature < 50) {
// 	console.log("Temperature is less than 50");
// } else {
// 	console.log("Temperature is greater than 50");
// }

// const score = 200;
// if (score > 100) {
// 	const power = `fly`;
// 	console.log(`User's power: ${power}`);
// } else {
// }

// Shorthand condition - Not recommended
// const balance = 200;

// if (balance > 100) console.log("test");

// const balance = 1000;

// if (balance < 500) {
// 	console.log("Less than 500");
// } else if (balance < 750) {
// 	console.log("Less than 750");
// } else if (balance < 900) {
// 	console.log("Less than 900");
// } else {
// 	console.log("Less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
	// and operator
	console.log("Allowed to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
	// OR operator
	console.log("User logged in");
}
