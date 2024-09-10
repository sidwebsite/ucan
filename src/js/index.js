// aos
import AOS from "aos";
AOS.init();
// marquee
import Marquee from "./modules/marquee";
window.addEventListener("load", Marquee(".marquee", 15));
// Swiper
// import Swiper from "swiper/bundle";
// banner
let bannerSwiper = new Swiper(".bannerSwiper", {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
        delay: 9000,
    },
    effect: "coverflow",
    coverflowEffect: {
        rotate: -1,
        stretch: 0,
        depth: 0,
        modifier: 1,
        scale: 0.8,
        slideShadows: false,
    },

    navigation: {
        nextEl: ".banner-button-next",
        prevEl: ".banner-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 1,
        },
        1200: {
            slidesPerView: 2.7,
        },
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
    },
});

// function
// function tabsFoucs(tabNavId, tabContentId) {
//     const tabNav = document.querySelector(tabNavId);
//     const tabContent = document.querySelector(tabContentId);
//     const tabNavLinks = tabNav.querySelectorAll('.nav-link');
//     const links = tabContent.querySelectorAll('.tab-pane');

//     const triggerTabList = [].slice.call(tabNavLinks);
//     triggerTabList.forEach((triggerEl, triggerindex) => {
//         const tabTrigger = new bootstrap.Tab(triggerEl);
//         triggerEl.addEventListener('focus', () => {
//             tabTrigger.show();
//         });
//         // triggerEl.addEventListener('keyup, keypress', (e) => {
//         //     if(e.keyCode === 9 && e.shiftKey === true){
//         //         tabNavLinks[triggerindex - 1].focus();
//         //         tabTrigger.show();
//         //     }
//         // });
//     });

//     links.forEach((pane, num, paneArr) => {
//         const a = pane.querySelectorAll('a');
//         a.forEach((a, i ,arr) => {
//             a.addEventListener('focusout', () => {
//                 if(i === arr.length - 1) {
//                     if (num !== (paneArr.length - 1)) {
//                         tabNavLinks[num + 1].focus();
//                     } else {
//                         return false;
//                     };
//                 }
//             });
//         });
//     });
// };
// //
// tabsFoucs('#indexTabs', '#indexTabContent');
// // 最新消息
// tabsFoucs('#newsTabs', '#newsTabContent');
// // 研習會精華和講義下載
// tabsFoucs('#ApplicationSharingTab', '#ApplicationSharingTabContent');
