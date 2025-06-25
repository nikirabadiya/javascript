// Old way to define getters and setters in JavaScript
function User(email, password) {
	this._email = email;
	this._password = password;

	Object.defineProperty(this, "email", {
		get: function () {
			return this._email.toUpperCase();
		},
		set: function (value) {
			this.email = value;
		},
	});
	Object.defineProperty(this, "password", {
		get: function () {
			return this._password.toUpperCase();
		},
		set: function (value) {
			this.password = value;
		},
	});
}

const nikita = new User("n@test.com", "abc");
console.log(nikita.email, nikita.password);
