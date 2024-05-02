let slideIndex = 0;
let slideInterval; 

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    const leftArrow = document.querySelector(".left");
    const rightArrow = document.querySelector(".right");
    const slideshowContainer = document.querySelector(".slideshow-container");

    function displaySlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function moveLeft() {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        displaySlide(slideIndex);
    }

    function moveRight() {
        slideIndex = (slideIndex + 1) % slides.length;
        displaySlide(slideIndex);
    }

    leftArrow.addEventListener('click', moveLeft);

    rightArrow.addEventListener('click', moveRight);

    function startSlideShow() {
        slideInterval = setInterval(moveRight, 3000);
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    startSlideShow();

    slideshowContainer.addEventListener('mouseenter', stopSlideShow);
    slideshowContainer.addEventListener('mouseleave', startSlideShow);
}

document.addEventListener("DOMContentLoaded", showSlides);
