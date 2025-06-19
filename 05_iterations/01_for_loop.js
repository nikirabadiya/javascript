//for

// Syntax
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }

for (let i = 0; i < 10; i++) {
	const element = i;
	// console.log(element);
}

for (let i = 0; i < 10; i++) {
	const element = i;
	if (element == 5) {
		// console.log("5 is the best number");
	}
	// console.log(element);
}

for (let i = 1; i <= 10; i++) {
	// console.log(`outer loop: ${i}`);

	for (let j = 1; j <= 10; j++) {
		// console.log(`inner loop: ${j} and outer loop: ${i}`);
		// console.log(i + `*` + j + "=" + i * J);
		// console.log(`${i} * ${j} = ${i * j}`);
	}
}

let myArray = ["Captain", "Ironman", "Hulk"];

for (let index = 0; index < myArray.length; index++) {
	const element = myArray[index];
	// console.log(element);
}

// break and continue

for (let index = 1; index <= 20; index++) {
	if (index == 5) {
		// console.log("Detected 5");
		break; // stop the loop immediately after the condition is satisfied
	}
	// console.log(`value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
	if (index == 5) {
		console.log("Detected 5");
		continue; // Will ignore the printing the value of 5 as it will ignore this case, so the basically, we want to ignore or skip the condition for one time without stopping the loop
	}
	console.log(`value of i is ${index}`);
}
