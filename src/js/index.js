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
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 1,            
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1.5,            
        },
    },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        scale: .85,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".banner-button-next",
        prevEl: ".banner-button-prev",
    }
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
            // slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 3,
            // slidesPerGroup: 3,
        },
        1024: {
            slidesPerView: 5,
            // slidesPerGroup: 5,
        },
    },
});

// links
const linksSwiper = new Swiper(".linksSwiper", {
    loop: true,    
    navigation: {
        nextEl: ".links-button-next",
        prevEl: ".links-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    centeredSlides: true,
    breakpoints: {
        640: {
            slidesPerView: 1,       
            loopedSlides: 0,     
        },
        768: {
            slidesPerView: 3,

        },
        1024: {
            slidesPerView: 5,
            loopedSlides: 2,
        },
    }
});
