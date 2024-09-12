function sayMyName() {
	console.log("t");
	console.log("e");
	console.log("s");
	console.log("t");
}
// sayMyName();

// function addTwoNumbers(number1, number2) {
// 	console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
	// let result = number1 + number2;
	// return result;

	return number1 + number2;
}

const result = addTwoNumbers(3, 5);
// console.log(result);

function loginUserMessage(username = "sam") {
	if (!username) {
		console.log("Please enter Username.");
		return;
	}
	return `${username} just logged in.`;
}

// console.log(loginUserMessage("test"));
// console.log(loginUserMessage());

// function calculateCartPrice(...num1) {
// 	// rest operator which will include all values in one place
// 	return num1;
// }

function calculateCartPrice(val1, val2, ...num1) {
	return num1;
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
	username: "test",
	price: 100,
};

function handleObject(anyObject) {
	console.log(
		`Username is ${anyObject.username} and price is ${anyObject.price}`
	);
}

// handleObject(user);
// handleObject({
// 	username: "sam",
// 	price: 293,
// });

const newArray = [200, 400, 100, 450];

function handleArray(getArray) {
	return getArray[1];
}

// console.log(handleArray(newArray));
// console.log(handleArray([200, 230, 402, 493]));
