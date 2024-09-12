const user = {
	userName: "Test",
	price: 999,
	welcomeMessage: function () {
		console.log(`${this.userName}, Welcome to website`);
		console.log(this);
	},
};
// user.welcomeMessage();
// user.userName = "Sam";
// user.welcomeMessage();

// console.log(this);

// function one() {
// 	let userName = "Test";
// 	console.log(this.userName);
// }
// one();

// const one = function() {
//   let userName = "Test";
// 	console.log(this.userName);
// }

// const one = () => {
// 	let userName = "Test";
// 	console.log(this);
// };
// one();

// const addTwo = (num1, num2) => {
// 	return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2; // If only one line is there in the function
// const addTwo = (num1, num2) => (num1 + num2);

// Note: If we use curly braces in arrow function, then need to write return keyword, but if not using curly braces, and using parentheses or not, no need to write return keyword, it will help us to learn react syntax properly

// console.log(addTwo(3, 4));

const testObject = () => ({userName: 'Test'})
console.log(testObject());;