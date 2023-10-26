/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const navBtn = document.querySelectorAll('#navbarRight .nav-link');
function scrollToTargetAdjusted(id) {
    const element = document.querySelector(id);
    const headerOffset = 100;
    let elementPosition = element.getBoundingClientRect().top;
    let offsetPosition = window.pageYOffset === 0 ? elementPosition + window.pageYOffset - (headerOffset + 80) : elementPosition + window.pageYOffset - headerOffset;
    console.log(window.pageYOffset);
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });   
}
navBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const idName = btn.getAttribute('href');
        scrollToTargetAdjusted(idName);
    });
});
/******/ })()
;
//# sourceMappingURL=aboutUACN.js.map