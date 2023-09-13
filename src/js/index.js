// bootstrap
import * as bootstrap from 'bootstrap';
// aos
import AOS from 'aos';
AOS.init();
// marquee
import Marquee from './modules/marquee';
window.addEventListener('load', Marquee('.marquee', 15))
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
        el: ".swiper-pagination"
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
        el: ".swiper-pagination"
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
// function
function tabsFoucs(tabNavId, tabContentId) {
    if(document.querySelector(tabNavId)) {
        const tabNav = document.querySelector(tabNavId);
        const tab = new bootstrap.Tab(tabNav);
        const tabContent = document.querySelector(tabContentId);
        tabContent.querySelector('.custom-btn-primary').addEventListener('blur', () => {
            tabNav.focus();
            tab.show();
        });
    } else {
        return false;
    }
    
}
// 
tabsFoucs('#functionQuery-tab', '#careerInquiry');
tabsFoucs('#recordQuery-tab', '#functionQuery');
tabsFoucs('#abilityDevelopment-tab', '#recordQuery');
// 
tabsFoucs('#academicAffairs-tab', '#career');
tabsFoucs('#schoolAffairs-tab', '#academicAffairs');
// 最新消息
tabsFoucs('#importantNotice-tab', '#news');
tabsFoucs('#systemNotification-tab', '#importantNotice');
tabsFoucs('#eventNotification-tab', '#systemNotification');
tabsFoucs('#otherAnnouncements-tab', '#eventNotification');
// 應用分享
tabsFoucs('#pills-download-tab', '#pills-seminar');