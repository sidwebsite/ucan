/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/js/shareFeedback.js ***!
  \*********************************/
;(function() {
    const shareFeedbackLink = document.querySelectorAll('.shareFeedback-link');
    shareFeedbackLink.forEach((link) => {
        const nextSibling = link.nextElementSibling;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            nextSibling.classList.add('show');
        });
        link.addEventListener('focus', () => {
            nextSibling.classList.add('show');
        });
        const close = link.nextElementSibling.querySelector('.close')
        close.addEventListener('click', () => {
            nextSibling.classList.remove('show');
        });
    });
})();
/******/ })()
;
//# sourceMappingURL=shareFeedback.js.map