// aos
import AOS from 'aos';
AOS.init();
// login
import login from './modules/login';
login();
// Swiper
import Swiper from 'swiper/bundle';
// banner
const bannerSwiper = new Swiper(".bannerSwiper", {
    lazy: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// Share and Feedback
const feedbackSwiper = new Swiper(".feedbackSwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".feedback-button-next",
        prevEl: ".feedback-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,            
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 5,
        },
    },
});
