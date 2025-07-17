const inputs = document.querySelectorAll(".input-fields");
const personTip = document.querySelector(".person-tip");
const totalTip = document.querySelector(".total-tip");
const personBill = document.querySelector(".person-bill");
const totalBill = document.querySelector(".total-bill");
const errorDisplay = document.querySelector(".error");
const calculateBtn = document.querySelector(".calculate-btn");
const clearBtn = document.querySelector(".clear-btn");

function calculateTip() {
	let billAmount = Number(document.querySelector(".amount").value);
	let tipAmount = Number(document.querySelector(".tip").value);
	let peopleCount = Number(document.querySelector(".people").value);

	if (isNaN(billAmount) || isNaN(tipAmount) || isNaN(peopleCount)) {
		errorDisplay.textContent = "Please enter a valid input";
		return;
	}

	if (billAmount < 0 || tipAmount < 0 || peopleCount <= 0) {
		errorDisplay.textContent =
			"Please enter positive values (people must be > 0)";
		return;
	}

	errorDisplay.textContent = "";

	const tipPercentage = tipAmount / 100;

	const totalTipAmount = billAmount * tipPercentage;
	const totalBillAmount = billAmount + totalTipAmount;
	const tipPerPerson = totalTipAmount / peopleCount;
	const billPerPerson = totalBillAmount / peopleCount;

	personTip.textContent = `$${tipPerPerson.toFixed(2)}`;
	totalTip.textContent = `$${totalTipAmount.toFixed(2)}`;
	personBill.textContent = `$${billPerPerson.toFixed(2)}`;
	totalBill.textContent = `$${totalBillAmount.toFixed(2)}`;
}

function clearResult() {
	[personTip, totalTip, personBill, totalBill].forEach(
		(item) => (item.textContent = "$0.00")
	);
}

inputs.forEach((input) => {
	input.addEventListener("input", calculateTip);
});

calculateBtn.addEventListener("click", calculateTip);

clearBtn.addEventListener("click", () => {
	inputs.forEach((input) => (input.value = ""));
	errorDisplay.textContent = "";
	clearResult();
});
