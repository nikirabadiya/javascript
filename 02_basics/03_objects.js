// Two ways to declare the object - literals and constructor

/*************************** IMPORTANT INFO  ***************************/
// Keep in the mind that if we declare an object by literal way then it will not consider as singleton, but if is declared by construction, then it will be singleton

// Singleton object
// Object.create

// Object Literals

const mySym = Symbol("key1"); // declaring the Symbol
// now most interview question will be like declare the symbol in the object as a key, to do that, refer how I have declare the 'mySym' var into the object as a key but not the way we usually declare in the object

const jsUser = {
	name: "Test",
	"full Name": "Test another",
	[mySym]: "myKey1", // declaring the symbol here as an object key
	age: 24,
	location: "Surat",
	email: "test@google.com",
	isLoggedIn: false,
	lastLoginDays: ["Mon", "Sat"],
};

// console.log(jsUser.email); // test@google.com

// to find the LENGTH of the object
// console.log(Object.keys(jsUser).length); // 7

// console.log(jsUser["email"]); // Another way to access object in special cases like we are having string for the key i.e here 'full name; is there so that is the special case
// console.log(jsUser["full Name"]); // Test another

// to access the SYMBOL from object, we have to use [] way but without sigle or double quotes, so that is the main difference
// console.log(jsUser[mySym]); // myKey1

jsUser.email = "test@gmail.com"; // it will change the email value of the object

/* 

if we don't want anyone to be able to change the value of the object in near future, then we need to freeze that object and to do that we have to use the below syntax

*/

// Object.freeze(jsUser); // now any value of this object will not be changed

// jsUser.email = "test@test.com"; // it will not change the email value as we have already freeze the object

// console.log(jsUser.email); // test@gmail.com // we changed its value to that result before freezing the object that's why it is displaying this result but it did not changed to our last email value

// Calling function in the object
jsUser.greeting = function () {
	console.log("Hello JS User!");
};

jsUser.greeting2 = function () {
	console.log(`Hello JS User! ${this.name}`);
};

// console.log(jsUser.greeting); // [Function (anonymous)] // it has not executed the function, it has just gave us the reference of that function
// console.log(jsUser.greeting()); // Hello JS User!
console.log(jsUser.greeting2()); // Hello JS User!
