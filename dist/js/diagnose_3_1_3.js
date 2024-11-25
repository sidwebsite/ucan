/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const diagnoseCheckbox = document.querySelectorAll('.diagnose-custom-checkbox');

diagnoseCheckbox.forEach((check) => {
    check.checked === true ? check.closest('tr').classList.add('table-warning') : false
    // 2024/11/25修改 start
    check.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') {
            e.target.checked = !e.target.checked
            e.target.checked === true ? e.target.closest('tr').classList.add('table-warning') : e.target.closest('tr').classList.remove('table-warning');
            e.target.checked === true ? e.target.ariaChecked = true : e.target.ariaChecked = false 
        }
    })
    check.addEventListener('click', (e) => {
        e.target.checked = !!e.target.checked
        e.target.checked === true ? e.target.closest('tr').classList.add('table-warning') : e.target.closest('tr').classList.remove('table-warning');
        e.target.checked === true ? e.target.ariaChecked = true : e.target.ariaChecked = false 
    })
    // 2024/11/25修改 end
});
/******/ })()
;
//# sourceMappingURL=diagnose_3_1_3.js.map