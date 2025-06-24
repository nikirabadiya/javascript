function setUserName(userName) {
	// complex DB calls
	this.userName = userName;
}

function createUser(userName, email, password) {
	setUserName.call(this, userName);

	this.email = email;
	this.password = password;
}

const newUser = new createUser("Test", "test@gmail.com", "123");

console.log(newUser);
