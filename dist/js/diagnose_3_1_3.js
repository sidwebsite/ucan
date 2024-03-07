/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const diagnoseCheckbox = document.querySelectorAll('.diagnose-custom-checkbox');

diagnoseCheckbox.forEach((check) => {
    if(check.checked === true ) check.closest('tr').classList.add('table-warning');
    check.addEventListener('change', () => {
        check.checked === true ? check.closest('tr').classList.add('table-warning') : check.closest('tr').classList.remove('table-warning');
    });
});
/******/ })()
;
//# sourceMappingURL=diagnose_3_1_3.js.map