/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const diagnosisTest = document.querySelectorAll('.diagnosis-test');
// console.log(diagnosisTest.length)
let d = function(test) {
    console.log( `scrollTop: ${Math.ceil(test.scrollTop)}`);
}
function scrollToTargetAdjusted(elments) {
    const headerOffset = 100;
    let elementPosition = elments.getBoundingClientRect().top;
    let offsetPosition = window.pageYOffset === 0 ? elementPosition + window.pageYOffset - (headerOffset + 80) : elementPosition + window.pageYOffset - headerOffset;
    console.log(window.pageYOffset);
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });   
}
// 
diagnosisTest.forEach((test, index) => {
    test.querySelectorAll('.radio input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            console.log(index,diagnosisTest.length );
            if(e.target) {
                scrollToTargetAdjusted(test);
                test.classList.add('opacity-25');
                test.classList.remove('diagnosis-test-active');
                if(index !== (diagnosisTest.length - 1)) {
                    test.nextElementSibling.classList.add('diagnosis-test-active');
                } else {
                    return false;
                }
            };
        });
    })
})
/******/ })()
;
//# sourceMappingURL=diagnose_3_2_3.js.map