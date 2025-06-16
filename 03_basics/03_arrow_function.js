const user = {
	userName: "Test",
	price: 999,

	welcomeMsg: function () {
		console.log(`${this.userName}, Welcome to website`);
		console.log(this); // { userName: 'Test', price: 999, welcomeMsg: [Function: welcomeMsg] }
	},
};

// user.welcomeMsg(); // Test, Welcome to website
// user.userName = "Sam";
// user.welcomeMsg(); // Sam, Welcome to website

/*
this keyword represents the current context
*/
// console.log(this); // {}

/*
for node environment, the context of this keyword will be empty,
BUT for browser, it will be Window object
*/

// function chai() {
// 	let userName = "Test";
// 	console.log(this.userName); // undefined // this keyword will not work in the function unlike objects
// }

// chai();

// const chai = () => {
// 	let userName = "Test";
// 	console.log(this); // {}
// };

// chai();

// basic syntax of the arrow function
// () => {}

// const addTwo = (num1, num2) => {
// 	return num1 + num2;
// };

// Implicit return arrow function // if function is too small then we can write this way too
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);

// console.log(addTwo(3, 4)); // 7

/*

IMPORTANT NOTE:

if we use curley braces - {} then we have to write return keyword, but if don't use {} then we don't have to write return, we can use paranthesis - () to make it more understandable but DO NOT write return keyword if we are writing implicit arrow function which is one liner and there we don't have to use {}, same with object, if we want to use object then we will have to cover it like ({}) in the implicit functioin shown in below example

*/

const userNew = () => ({ userName: "test" });

// console.log(userNew()); // { userName: 'test' }
