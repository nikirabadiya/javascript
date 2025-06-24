class User {
	constructor(userName) {
		this.userName = userName;
	}

	logMe() {
		console.log(`Username is ${this.userName}`);
	}
}

class Teacher extends User {
	// Teacher class will be able to access the properties and methods of User class, in other terms - Teacher class is inheriting from User class
	constructor(userName, email, password) {
		super(userName); // Call the constructor of the parent class (User)
		this.email = email;
		this.password = password;
	}

	addCourse() {
		console.log(`New course was added by ${this.userName}`);
	}
}

const chai = new Teacher("Chai", "chai@teacher.com", "123");
chai.addCourse();

const tea = new User("Tea");
tea.logMe();
// tea.addCourse(); // This will throw an error because User class does not have addCourse method

chai.logMe(); // This will work because Teacher class inherits logMe method from User class

console.log(chai === tea); // false, because they are different instances
console.log(chai === Teacher); // false, because chai is an instance of Teacher class, not the class itself
console.log(chai instanceof Teacher); // true, because chai is an instance of Teacher class
console.log(chai instanceof User); // true, because Teacher class inherits from User class
