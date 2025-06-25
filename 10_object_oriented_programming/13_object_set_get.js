const User = {
	_email: "n@test.com",
	_password: "abc",

	get email() {
		return this._email.toUpperCase();
	},

	set email(value) {
		this._email = value;
	},
};

const nikita = Object.create(User);
console.log(nikita.email);
