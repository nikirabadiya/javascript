function sayMyName() {
	console.log("t");
	console.log("e");
	console.log("s");
	console.log("t");
}
// sayMyName();

// function addTwoNumbers(num1, num2) {
// 	console.log(num1 + num2);
// }

// addTwoNumbers(3, 4); // 7
// addTwoNumbers(3, "4"); // 34

// const result = addTwoNumbers(3, 5);
// console.log(result); // undefined if we have not added return keyword as without return it will not return any result

function addTwoNumbers(num1, num2) {
	let result = num1 + num2;
	return result;
	console.log("test"); // it will not execute as we have written it after the return
}

const finalResult = addTwoNumbers(3, 5);
// console.log(finalResult);

function loginUseMsg(username) {
	if (username === undefined) {
		console.log("Please enter a username");
		return;
	} else {
		return `${username} just logged in`;
	}
}
loginUseMsg("Nik"); // will not give any result as it has only returned the value but we haven't said anywhere to print that value too

// console.log(loginUseMsg("Nik")); // Nik just logged in
// console.log(loginUseMsg()); // Please enter a username

// function calculateCartPrice(...num1) {
// 	// rest or spread operator
// 	return num1;
// }
// console.log(calculateCartPrice(200, 300, 900)); // [ 200, 300, 900 ]

function calculateCartPrice(val1, val2, ...num1) {
	// rest or spread operator
	return num1;
}
// console.log(calculateCartPrice(200, 300, 900, 3000)); // [ 900, 3000 ] // 200 and 300 values will be assigned to val1 and val2 respectively so we will get these numbers as num1 rest operator

const user = {
	userName: "test",
	price: 999,
};

function handleObject(anyobject) {
	console.log(
		`Username is ${anyobject.userName} and price is ${anyobject.price}`
	);
}
// handleObject(user); // Username is test and price is 999

handleObject({
	userName: "Sam",
	price: "399",
}); // Username is Sam and price is 399

const myNewArray = [200, 400, 500, 900];

function returnSecondValue(getArray) {
	return getArray[1];
}
// console.log(returnSecondValue(myNewArray)); // 400

console.log(returnSecondValue([200, 500, 900, 700])); // 500
