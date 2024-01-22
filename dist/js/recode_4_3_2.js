/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const recodeCollapseBtn = document.querySelectorAll('.recode-collapse-btn')
const recodeCollapse = document.querySelectorAll('.collapse');
let collapseElementList  = [].slice.call(recodeCollapse);
let collapseList = collapseElementList.map(function (collapseEl) {
    return new bootstrap.Collapse(collapseEl, {
        toggle: false
    });
});
recodeCollapseBtn.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        collapseList[index].toggle();
        btn.classList.toggle('recode-btn-rotate');
    });
});
/******/ })()
;
//# sourceMappingURL=recode_4_3_2.js.map