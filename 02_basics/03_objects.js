// Singleton
// Object.create

// Objects literals
const mySym = Symbol("Key1"); // Symbol declaration

const jsUser = {
	name: "Test",
	"full name": "Test Test",
	age: "18",
	[mySym]: "myKey1", // Accessing symbol into object through this syntax
	location: "Surat",
	email: "test@google.com",
	isLoggedIn: false,
	lastLoginDays: ["Monday", "Saturday"],
};

// console.log(jsUser.email);
// console.log(jsUser.full name); // Not possible
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]); // with this bracket, without quotes - it is symbol

// jsUser.email = "test@gmail.com";
// console.log(jsUser.email);

// if we don't want anyone to change value to object, then we can freeze that object
// Object.freeze(jsUser);

jsUser.email = "test@hotmail.com";
// console.log(jsUser.email); // will not change the value of the email key

jsUser.greeting = function () {
	// Declaring function in the object
	console.log("Hello JS User");
};

jsUser.greetingTwo = function () {
	console.log(`Hello JS User, ${this.name}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
