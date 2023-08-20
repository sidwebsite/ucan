/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/js/shareFeedback.js ***!
  \*********************************/
;(function() {
    const shareFeedbackLink = document.querySelectorAll('.shareFeedback-link');
    const shareFeedbackModal = document.querySelectorAll('.shareFeedbackModal');
    shareFeedbackLink.forEach((link, index) => {
        const nextSibling = link.nextElementSibling;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            shareFeedbackModal.forEach((model) => {
                model.classList.remove('show');
            });
            shareFeedbackModal[index].classList.add('show');
        });
        const close = link.nextElementSibling.querySelector('.close')
        close.addEventListener('click', () => {
            nextSibling.classList.remove('show');
        });
        link.addEventListener('focus', () => {
            nextSibling.classList.add('show');
        });
        const a = nextSibling.querySelectorAll('a');
        a.forEach((a) => {
            a.addEventListener('focusout', () => {
                nextSibling.classList.remove('show');
            })
        });
    });
})();
/******/ })()
;
//# sourceMappingURL=shareFeedback.js.map