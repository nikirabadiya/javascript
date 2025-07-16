// const clock = document.querySelector('#clock');
const clock = document.getElementById("clock");
const hourToggle = document.querySelector(".switch input");

// let date = new Date();
// console.log(date.toLocaleTimeString());

setInterval(function () {
	let date = new Date();
	const is24Hour = hourToggle.checked;
	clock.innerHTML = date.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
		hour12: !is24Hour, // this ensures AM/PM is shown
	});
}, 1000);
