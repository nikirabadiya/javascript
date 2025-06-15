// Immediately Invoked Functin Expressions (IIFE)

// function chai() {
// 	console.log("DB connected");
// }
// chai(); // DB connected

// Basic syntax of it
// (function definition)(function execution)

// Named IIFE
(function chai() {
	console.log("DB connected");
})();

// chai(); // DB connected

// Unnamed IIFE
(() => {
	console.log("DB connected 2");
})(); // DB connected 2

((name) => {
	console.log(`DB connected 2 ${name}`);
})("test"); // DB connected 2 test

/* 

Why to use IIFE?

Of course, to immediate invoke the function, but in interview, we have to explain the real reason which is - sometimes, we get problems from pollution of global scope, to remove the pollution of global scope variable declaration or other pollution, we use IIFE  

*/
