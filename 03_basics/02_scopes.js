var c = 300;

if (true) {
	let a = 10;
	const b = 20;
	var c = 30;
}

// console.log(a); // will give an error as it is within the scope and we are printing it outside of the scope
// console.log(b); // same as above
// console.log(c); // 30

/*
this is the problem with var keyword, that it does not obey the scope and it does not limit it to its scope and it creats so many bugs in the code if variables are not scope specific
*/

let a = 300;

if (true) {
	let a = 10;
	const b = 20;
	// console.log("Inner" + a); // 10 // it will not take outside value, it will take local scope value
}
// console.log(a); // 300 // it will not return the another value which is in the anothre scope and this calls as 'Global scope'

// function one() {
// 	const userName = "test";

// 	function two() {
// 		const website = "youtube";
// 		console.log(userName);
// 	}
// 	// console.log(website); // it will give the error as it is the two() functions's scope and we have called it outside of its scope

// 	two(); // it will accept the variable username as this variable will act as a global variable for it

// 	/* it also called as closue as the child function can access the variable of parent function */
// }
// one(); // test // it will execute the function two() which is printing the result we got

if (true) {
	const userName = "Nik";
	if (userName === "Nik") {
		const website = " youTube";
		// console.log(userName + website); // Nik youTube // it would be able to access the userName variable from parent scope that's why it will not give us any error
	}
	// console.log(website); // will throw an error as it is outside of its scope
}
// console.log(userName); // will throw an error as it is outside of its scope

// **************** INTERESTING **************** //

console.log(addOne(5)); // 6

function addOne(num) {
	return num + 1;
}

// Expression function

console.log(addTwo(2)); // will throw an error as we have not declared the function as an ecpression which is also called hoisting

const addTwo = function (num) {
	return num + 2;
};

/*

What is hoisting?

basic overview of the hoisting is that we can not call the function without declaring it first as shown the above example, we have not declared the two() function before we tried to execute it

*/
