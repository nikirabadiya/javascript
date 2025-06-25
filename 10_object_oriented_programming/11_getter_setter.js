class user {
	constructor(email, password) {
		this.email = email;
		this.password = password;
	}

	get email() {
		return this._email.toUpperCase();
	}

	set email(value) {
		this._email = value;
		// DO NOT return anything in setter
	}

	get password() {
		return this._password.toUpperCase();
	}

	set password(value) {
		this._password = value;
	}
}

const nikita = new user("n@gmail.com", "abc");
console.log(nikita.email, nikita.password);
