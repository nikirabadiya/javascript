// Immediately Invoked Functin Expressions (IIFE)

// function one() {
// 	console.log("DB connected");
// }

// IIFE syntax
// ()();

// Named IIFE
(function one() {
	// console.log("DB connected");
})();

// unNamed IIFE
(() => {
	// console.log(`DB Connected`);
})();

((name) => {
	console.log(`DB Connected ${name}`);
})("Test");

/* Why to use IIFE? */
/* Of course, to immediate invoke the function, but in interview, we have to explain the real reason which is - sometimes, we get problems from pollution of global scope, to remove the pollution of global scope variable declaration or other pollution, we use IIFE  */
