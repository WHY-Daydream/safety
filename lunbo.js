const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function goToSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }
    slider.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

function goToNextSlide() {
    goToSlide(currentIndex + 1);
}

function goToPrevSlide() {
    goToSlide(currentIndex - 1);
}

nextButton.addEventListener('click', goToNextSlide);
prevButton.addEventListener('click', goToPrevSlide);

setInterval(goToNextSlide, 3000); // 自动播放间隔，单位是毫秒