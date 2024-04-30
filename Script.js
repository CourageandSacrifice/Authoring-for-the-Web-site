let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";

    setTimeout(showSlides, 3000);
}

document.addEventListener("DOMContentLoaded", showSlides);
