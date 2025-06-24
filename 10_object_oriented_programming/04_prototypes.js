// let myName = "Nikita     ";

// console.log(myName.truelength());

let myHeros = ["thor", "spiderman"];

let heroPower = {
	thor: "hammer",
	spiderman: "webslinging",

	getSpiderPower: function () {
		console.log(`Spidey power is ${this.spiderman}`);
	},
};

Object.prototype.Nikita = function () {
	console.log("Nikita is present in all objects");
};

Array.prototype.heyNikita = function () {
	console.log("Nikita is present in all arrays");
};

// heroPower.Nikita();
// myHeros.Nikita();
// heroPower.heyNikita();
// myHeros.heyNikita();

// Inheritance

// Older Syntax
const user = {
	name: "Nikita",
	email: "test@google.com",
};

const teacher = {
	makeVideo: true,
};

const teachingSupport = {
	isAvailable: false,
};

const TASupport = {
	makeAssignment: "JS Assignment",
	fullTime: true,
	__proto__: teachingSupport, // now this object can inherit properties from teachingSupport
};

teacher.__proto__ = user;

// Modern Syntax
Object.setPrototypeOf(teachingSupport, teacher); // teachingSupport can now access or inherit properties from teacher

let anotherUserName = "Nikita      ";

String.prototype.trueLength = function () {
	// console.log(`${this}`); // Nikita
	console.log(`True length is ${this.trim().length}`);
};

anotherUserName.trueLength();
"Testing".trueLength();
