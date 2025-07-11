function generatePassword(
	length,
	includeLowerCase,
	includeUpperCase,
	includeNumbers,
	includeSymbols
) {
	const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
	const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numberChars = "0123456789";
	const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

	let allowedChars = "";
	let password = "";

	allowedChars += includeLowerCase ? lowerCaseChars : "";
	allowedChars += includeUpperCase ? upperCaseChars : "";
	allowedChars += includeNumbers ? numberChars : "";
	allowedChars += includeSymbols ? symbolChars : "";

	if (length <= 0) {
		return `Password length must be atleast 1`;
	}

	if (allowedChars.length === 0) {
		return `At least one set of characters needs to be selected`;
	}

	for (let i = 0; i < length; i++) {
		const randomeIndex = Math.floor(Math.random() * allowedChars.length);
		password += allowedChars[randomeIndex];
	}

	return password;
}

const submitBtn = document.querySelector("#submit");
const output = document.querySelector("#output");

submitBtn.addEventListener("click", () => {
	const pwdLength = document.querySelector("#length").value;
	const includeLowerCase = document.querySelector("#lowercase").checked;
	const includeUpperCase = document.querySelector("#uppercase").checked;
	const includeNumbers = document.querySelector("#numbers").checked;
	const includeSymbols = document.querySelector("#symbols").checked;
	const password = generatePassword(
		pwdLength,
		includeLowerCase,
		includeUpperCase,
		includeNumbers,
		includeSymbols
	);
	output.textContent = password;
});
