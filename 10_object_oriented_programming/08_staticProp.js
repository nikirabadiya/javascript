class User {
	constructor(userName) {
		this.userName = userName;
	}

	logMe() {
		console.log(`Username is ${this.userName}`);
	}

	static createID() {
		// Static methods are called on the class itself, not on instances of the class
		return `123`;
	}
}

const nikita = new User("Nikita");
// console.log(nikita.createID()); // This will throw an error because createID is a static method and cannot be called on an instance of the class

class Teacher extends User {
	constructor(userName, email) {
		super(userName);
		this.email = email;
	}
}

const mobile = new Teacher("Mobile", "m@phone.com");
mobile.logMe();
console.log(mobile.createID()); // This will throw an error because createID is a static method and cannot be called on an instance of the class
