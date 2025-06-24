// ES6+

// class User {
// 	constructor(userName, email, password) {
// 		this.userName = userName;
// 		this.email = email;
// 		this.password = password;
// 	}

// 	encryptPassword() {
// 		return `${this.password}abc`;
// 	}

// 	changeUserName() {
// 		return `${this.userName.toUpperCase()}`;
// 	}
// }
// const user1 = new User("Nikita", "test@gmail.com", "123");
// console.log(user1.encryptPassword());
// console.log(user1.changeUserName());

// Behind the scene
// function User(userName, email, password) {
// 	this.userName = userName;
// 	this.email = email;
// 	this.password = password;
// }

// User.prototype.encryptPassword = function () {
// 	return `${this.password}abc`;
// };

// User.prototype.changeUserName = function () {
// 	return `${this.userName.toUpperCase()}`;
// };

// const user2 = new User("Krishna", "test@gmail.com", "123");
// console.log(user2.encryptPassword());
// console.log(user2.changeUserName());
