/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const characterTab = document.querySelectorAll('.nav-phone');
characterTab.forEach(function (triggerEl) {
    let tab = new bootstrap.Tab(triggerEl);
    triggerEl.addEventListener('click', function (event) {
        event.preventDefault();
        triggerEl.classList.remove('active');
        tab.show();
    });
});
/******/ })()
;
//# sourceMappingURL=search_1_2.js.map