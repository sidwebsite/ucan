/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// accordion
const questionAccordionBtn = document.querySelectorAll(".contactUsQuestion .accordion-button");
const questionAccordion = document.querySelectorAll(".contactUsQuestion .collapse");
let collapseElementList = [].slice.call(questionAccordion);
let collapseList = collapseElementList.map(function (collapseEl) {
    return new bootstrap.Collapse(collapseEl, {
        toggle: false,
    });
});
questionAccordionBtn.forEach((btn, index) => {
    btn.addEventListener("click", function (e) {
        e.target.classList.toggle("collapsed");
        collapseList[index].toggle();
    });
});
/******/ })()
;
//# sourceMappingURL=contactUs_login.js.map