// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI); // will not change the value of Math.PI as it is the constant value

/*------- IMPORTANT INTERVIEW QUESTION COULD BE FOR SDE-2 OR SDE-3 -------*/
// We can not change the value of this property as it is set in the javascript engine as writable: false which means no matter what we try to changeit, be it we change the value to true from false, it is very well hardcoded in the javascript engine so that we can not change the value of Math.PI

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// const myNewObj = Object.create(null);

const product = {
	name: "Laptop",
	price: 250,
	isAvailable: true,

	orderProduct: function () {
		console.log("Product is not available for order");
	},
};

// console.log(Object.getOwnPropertyDescriptor(product)); // will return undefined as we have to set the proerty from that particular object for which property we want to see descriptor, and then we can also define the value of that property as per our need
// console.log(Object.getOwnPropertyDescriptor(product, "name"));
// {
//   value: 'Laptop',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// to define or change the property descriptor of an object, we can use Object.defineProperty() method like this:
Object.defineProperty(product, "name", {
	writable: false, // this will make the property non-writable
	enumerable: false, // this will make the property numerable meaning it will not show up in for...in loop or Object.keys() method
});
// console.log(Object.getOwnPropertyDescriptor(product, "name"));
// {
//   value: 'Laptop',
//   writable: false,
//   enumerable: false,
//   configurable: true
// }
for (let [key, value] of Object.entries(product)) {
	if (typeof value !== "function") {
		console.log(`key is ${key} and value is ${value}`);
	}
}
// the above code will only work if the property is enumerable which is by defalut, since we have set the name property to false, it will not show the name peroperty in above loop
