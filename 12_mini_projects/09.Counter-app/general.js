let counterNumber = document.querySelector(".counter-number");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let reset = document.querySelector(".reset");

let counter = 0;
let clickTimeout;

function updateCounter(change) {
	counter = Math.max(0, counter + change);
	counterNumber.value = counter;
}

function increment() {
	updateCounter(1);
}
function decrement() {
	updateCounter(-1);
}
function doubleIncrement() {
	updateCounter(5);
}
function doubleDecrement() {
	if (counter >= 5) {
		updateCounter(-5);
	} else {
		updateCounter(-counter); // brings it to 0
	}
}

function resetValue() {
	counter = 0;
	counterNumber.value = 0;
}

function handlePlusClick() {
	clearTimeout(clickTimeout);
	clickTimeout = setTimeout(() => {
		increment();
	}, 200);
}

function handlePlusDoubleClick() {
	clearTimeout(clickTimeout);
	doubleIncrement();
}

function handleMinusClick() {
	clearTimeout(clickTimeout);
	clickTimeout = setTimeout(() => {
		decrement();
	}, 200);
}

function handleMinusDoubleClick() {
	clearTimeout(clickTimeout);
	doubleDecrement();
}

plus.addEventListener("click", handlePlusClick);
plus.addEventListener("dblclick", handlePlusDoubleClick);
minus.addEventListener("click", handleMinusClick);
minus.addEventListener("dblclick", handleMinusDoubleClick);
reset.addEventListener("click", resetValue);

document.addEventListener("keydown", (e) => {
	if (e.key === "=" && e.shiftKey) increment(); // this is "+"
	if (e.key === "-" && !e.shiftKey) decrement();
	if (e.key === "r" || e.key === "R") resetValue();
});
