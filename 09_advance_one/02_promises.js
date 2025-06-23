// const promiseOne = new Promise(function (resolve, reject) {
// 	// Do and aysnc task
// 	// DB Calls, cryptography, network calls, etc.
// 	setTimeout(() => {
// 		console.log("Asyn task is completed");
// 		resolve();
// 	}, 1000);
// });

// promiseOne.then(function () {
// 	console.log("Promise is consumed");
// });

// new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		console.log("Asyn task 2");
// 		resolve();
// 	}, 1000);
// }).then(function () {
// 	console.log("Async 2 resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		resolve({ userName: "Test", email: "test@gmail.com" });
// 	}, 1000);
// });

// promiseThree.then(function (user) {
// 	console.log(user);
// });

const promiseFour = new Promise(function (resolve, reject) {
	setTimeout(() => {
		let error = true;
		if (!error) {
			resolve({ userName: "Test", password: "123" });
		} else {
			reject("Error: Something went wrong");
		}
	}, 1000);
});

promiseFour
	.then((user) => {
		console.log(user);
		return user.userName;
	})
	.then((userName) => {
		console.log(userName);
	})
	.catch(function (error) {
		console.log(error);
	})
	.finally(() => console.log("The Promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
	setTimeout(() => {
		let error = true;
		if (!error) {
			resolve({ userName: "Javscript", password: "123" });
		} else {
			reject("Error: JS went wrong");
		}
	}, 1000);
});

async function consumePromiseFive() {
	try {
		const response = await promiseFive;
		console.log(response);
	} catch (error) {
		console.log(error);
	}
}

consumePromiseFive();

// async function getAllUsers() {
// 	try {
// 		const response = await fetch("https://jsonplaceholder.typicode.com/users");
// 		// console.log(response);
// 		const data = await response.json(); // will have to convert the response to JSON format
// 		console.log(data);
// 	} catch (error) {
// 		console.log("Error:", error);
// 	}
// }

// getAllUsers();

fetch("https://api.github.com/users/hiteshchoudhary")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((erroe) => console.log(error));

/*--------------- IMPORTANT INTERVIEW QUESTION --------------- */
/*
fetch() is technically a promise, which only rejects when a network error is encountered. Even if the server response is an HTTP 404 or 500 error, it WILL NOT REJECT the promise as it does not understand the human written code which is considered as an error . Instead, it WILL RESOLVE the promise with a response object.
*/
