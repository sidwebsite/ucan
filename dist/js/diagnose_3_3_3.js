/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// collapse
const collapseBtn = document.querySelectorAll('.collapse-btn');
const collapse = document.querySelectorAll('.collapse')

collapseBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        new bootstrap.Collapse(collapse[index]).toggle();
        btn.classList.toggle('rotate-180');
    })
});
// diagnosis Test
const diagnosisTest = document.querySelectorAll('.diagnosis-test');
function scrollToTargetAdjusted(elments) {
    const headerOffset = 100;
    let elementPosition = elments.getBoundingClientRect().top;
    let offsetPosition = window.pageYOffset === 0 ? elementPosition + window.pageYOffset - (headerOffset + 80) : elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });   
}
// 
diagnosisTest.forEach((test, index) => {
    test.querySelectorAll('.radio input[type="radio"]').forEach(radio => {
        if(radio.checked === true) test.classList.add('opacity-25');
        radio.addEventListener('change', (e) => {
            if(e.target) {
                test.classList.add('opacity-25');
                test.classList.remove('diagnosis-test-active');
                if((index + 1) !== diagnosisTest.length) {
                    diagnosisTest[index + 1].classList.add('diagnosis-test-active');
                    scrollToTargetAdjusted(test);
                } else {
                    return false;
                }
            };
        });
    })
})
/******/ })()
;
//# sourceMappingURL=diagnose_3_3_3.js.map