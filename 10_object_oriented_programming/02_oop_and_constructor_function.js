const user = {
	userName: "Test",
	loginCount: 8,
	signedIn: true,

	getUserDetails: function () {
		// console.log(
		// 	`User ${this.userName} has logged in ${this.loginCount} times.`
		// );
		// console.log(this);
	},
};

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this); // {}

// Constrcutor function
function User(userName, loginCount, isLoggedIn) {
	this.userName = userName;
	this.loginCount = loginCount;
	this.isLoggedIn = isLoggedIn;

	this.greetings = () => {
		console.log(`Welcome ${this.userName}`);
	};

	return this;
}

const userOne = new User("Test", 12, true);
const userTwo = new User("Test2", 10, false);
// console.log(userOne);
// console.log(userTwo);
console.log(userTwo.constructor); // will give the reference to the User function

// Constructor creates a new instance of the object or a copy of the object or function so that the original object is not modified
