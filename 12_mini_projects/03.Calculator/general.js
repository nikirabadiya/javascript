const display = document.querySelector("#display");

function appendToDisplay(input) {
	display.value += input;
}

function calculate() {
	try {
		display.value = eval(display.value);
	} catch (err) {
		display.value = "Error";
	}
}

function clearDisplay() {
	display.value = "";
}
