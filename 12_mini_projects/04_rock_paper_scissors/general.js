const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoices) {
	const computerChoice = choices[Math.floor(Math.random() * 3)];
	let result = "";

	if (playerChoices === computerChoice) {
		result = "IT'S A TIE";
	} else {
		switch (playerChoices) {
			case "rock":
				result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOOSE!";
				break;
			case "paper":
				result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOOSE!";
				break;
			case "scissors":
				result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOOSE!";
				break;
		}
	}

	playerDisplay.textContent = `PLAYER: ${playerChoices}`;
	computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
	resultDisplay.textContent = result;

	resultDisplay.classList.remove("green", "red");
	if (result === "YOU WIN!") {
		resultDisplay.classList.add("green");
		playerScore++;
		playerScoreDisplay.textContent = playerScore;
	} else if (result === "YOU LOOSE!") {
		resultDisplay.classList.add("red");
		computerScore++;
		computerScoreDisplay.textContent = computerScore;
	}
}
