const weatherForm = document.querySelector(".weather-form");
const cityInput = document.querySelector(".city-input");
const card = document.querySelector(".card");
const cityName = document.querySelector(".city-name");
const tempContent = document.querySelector(".temp");
const humidityContent = document.querySelector(".humidity");
const desc = document.querySelector(".desc");
const weatherEmoji = document.querySelector(".weather-emoji");
const errorMsg = document.querySelector(".error");
const apiKey = "d22bf03e94bf37f3b6849e91e8e7448f";

weatherForm.addEventListener("submit", async (event) => {
	event.preventDefault();
	const city = cityInput.value.trim();

	if (city) {
		try {
			const weatherData = await getWeatherData(city);
			displayWeatherInfo(weatherData);
		} catch (error) {
			console.error(error);
			displayError(error);
		}
	} else {
		displayError("Please enter a city");
	}
});

async function getWeatherData(city) {
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			clearCard();
			card.style.display = "none";
			throw new Error("Could not fetch weather data");
		}
		return await response.json();
	} catch (error) {
		throw new Error("Network error or invalid response");
	}
}

function displayWeatherInfo(data) {
	let {
		name: city,
		main: { temp, humidity },
		weather: [{ description, id }],
	} = data;

	clearCard();
	temp = (temp - 273.15).toFixed(1);

	card.style.display = "flex";
	cityName.textContent = city;
	tempContent.textContent = `${temp}°C`;
	humidityContent.textContent = `Humidity: ${humidity}%`;
	desc.textContent = description;
	weatherEmoji.textContent = getWeatherEmoji(id);
}

function getWeatherEmoji(weatherId) {
	switch (true) {
		case weatherId >= 200 && weatherId < 300:
			return "⛈️";
		case weatherId >= 300 && weatherId < 600:
			return "🌧️";
		case weatherId >= 600 && weatherId < 700:
			return "❄️";
		case weatherId >= 700 && weatherId < 800:
			return "🌫️";
		case weatherId === 800:
			return "☀️";
		case weatherId >= 801 && weatherId < 810:
			return "☁️";
		default:
			return "?";
	}
}

function displayError(message) {
	clearCard();
	errorMsg.textContent = message;
}

function clearCard() {
	[
		cityName,
		tempContent,
		humidityContent,
		desc,
		weatherEmoji,
		errorMsg,
	].forEach((item) => (item.textContent = ""));
}
