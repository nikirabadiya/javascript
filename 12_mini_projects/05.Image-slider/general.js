const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slides .slide");
const currentSlide = document.querySelector(".current");
const totalSlides = document.querySelector(".total");
let slideIndex = 0;
let intervalId = null;

function intializeSlider() {
	if (slides.length > 0) {
		showSlide(slideIndex);
		totalSlides.textContent = slides.length;
		intervalId = setInterval(nextSlide, 5000); // for autoplay
	}
}

slider.addEventListener("mouseover", () => clearInterval(intervalId));
slider.addEventListener("mouseleave", () => {
	intervalId = setInterval(nextSlide, 5000);
});

function showSlide(index) {
	if (index >= slides.length) {
		slideIndex = 0;
	} else if (index < 0) {
		slideIndex = slides.length - 1;
	} else {
		slideIndex = index;
	}
	slides.forEach((slide) => {
		slide.classList.remove("display-slide");
	});
	currentSlide.textContent = slideIndex + 1;
	slides[slideIndex].classList.add("display-slide");
}

function prevSlide() {
	clearInterval(intervalId);
	slideIndex--;
	showSlide(slideIndex);
}

function nextSlide() {
	slideIndex++;
	showSlide(slideIndex);
}

// intializeSlider();
document.addEventListener("DOMContentLoaded", intializeSlider);

document.addEventListener("keydown", (e) => {
	if (e.key === "ArrowRight") nextSlide();
	if (e.key === "ArrowLeft") prevSlide();
});
