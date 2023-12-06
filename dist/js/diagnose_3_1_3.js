/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const diagnoseCheckbox = document.querySelectorAll('.diagnose-custom-checkbox');

diagnoseCheckbox.forEach((check) => {
    check.checked = false;
    check.addEventListener('change', () => {
        check.checked === true ? check.closest('tr').classList.add('table-light') : check.closest('tr').classList.remove('table-light');
    });
});
/******/ })()
;
//# sourceMappingURL=diagnose_3_1_3.js.map