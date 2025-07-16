const quoteButton = document.querySelector(".quote-btn");
const card = document.querySelector(".card");
const quoteContent = document.querySelector(".quote");
const authorContent = document.querySelector(".author");

const quotes = [
	{
		author: "William Shakespeare",
		quote: "All the world’s a stage, and all the men and women merely players.",
	},
	{
		author: "Virat Kohli",
		quote: "Self-belief and hard work will always earn you success.",
	},
	{
		author: "Woody Allen",
		quote: "Eighty percent of success is showing up.",
	},
	{
		author: "Emily Dickinson",
		quote: "That it will never come again is what makes life so sweet.",
	},
	{
		author: "George Eliot",
		quote: "It is never too late to be what you might have been.",
	},
	{
		author: "Haruki Murakami",
		quote: "Pain is inevitable. Suffering is optional.",
	},
	{
		author: "Swami Vivekananda",
		quote:
			"We are what our thoughts have made us, so take care about what you think.",
	},
	{
		author: "Sylvia Plath",
		quote: "Let me live, love, and say it well in good sentences.",
	},
	{
		author: "Stephanie Bennett Henry",
		quote: "Life is tough my darling, but so are you.",
	},
	{
		author: "Stephen King",
		quote:
			"Amateurs sit and wait for inspiration, the rest of us just get up and go to work.",
	},
];

function quoteGenerator() {
	let quoteId = Math.floor(Math.random() * quotes.length);
	const data = quotes[quoteId];
	card.style.display = "flex";
	return data;
}

function showQuote(data) {
	let { author, quote } = data;

	[quoteContent, authorContent].forEach((item) => {
		item.classList.remove("fade-in");
		void item.offsetWidth;
	});

	quoteContent.textContent = `"${quote}"`;
	authorContent.textContent = `By ${author}`;

	quoteContent.classList.add("fade-in");
	authorContent.classList.add("fade-in");
}

quoteButton.addEventListener("click", () => {
	const randomQuote = quoteGenerator(); // get random quote
	showQuote(randomQuote);
});

document.addEventListener("keydown", (e) => {
	if (e.key === "n" || e.key === "N") {
		const randomQuote = quoteGenerator(); // get random quote
		showQuote(randomQuote);
	}
});
