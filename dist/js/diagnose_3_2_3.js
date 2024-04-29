/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// Modal
let testAlertModal = new bootstrap.Modal(document.getElementById('testAlert'), {
    keyboard: false,
    backdrop: 'static'
});
window.addEventListener('load', () => testAlertModal.show());
// elements
const diagnosisTest = document.querySelectorAll('.diagnosis-test');
const testAlert = document.querySelectorAll('.alert');
const testBtn = document.querySelector('#test-btn');
// scroll
function scrollToTargetAdjusted(elments) {
    const headerOffset = 100;
    let elementPosition = elments.getBoundingClientRect().top;
    let offsetPosition = window.pageYOffset === 0 ? elementPosition + window.pageYOffset - (headerOffset + 80) : elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}
// 2024/04/19修改 start
// diagnosis test function
const switchFun = (bool, radios) => {
    bool === 'true' ? radios.forEach(r => r.disabled = false) : radios.forEach(r => r.disabled = true);
}
const testArr = [...diagnosisTest];
for (let i = 0; i < diagnosisTest.length; i++) {
    const element = diagnosisTest[i];
    const radios = element.querySelectorAll('.radio > input[type="radio"]');
    if(i === 0) {
        radios.forEach(r => r.disabled = false)
        element.classList.add('diagnosis-test-active');
    } else {
        radios.forEach(r => r.disabled = true)
    };
    // change
    radios.forEach(radio => {
        if(radio.checked === true) {
            element.dataset.switch = 'true';
            element.classList.add('opacity-25');
            switchFun(element.dataset.switch, radios);
        } else {
            radio.addEventListener('click', () => {
                const testEnd = diagnosisTest.length - 1;
                // block alert
                !testAlert[i].classList.contains('visually-hidden') ? testAlert[i].classList.add('visually-hidden') : false;
                // 開啟一下題效果
                if(element.dataset.switch === 'false') {
                    element.dataset.switch = 'true';
                    element.classList.add('opacity-25');
                    element.classList.remove('diagnosis-test-active');
                    scrollToTargetAdjusted(element);
                    if(i !== testEnd) {
                        const nextElement = diagnosisTest[i + 1];
                        const nextElementRadios = nextElement.querySelectorAll('.radio > input[type="radio"]');
                        nextElement.classList.add('diagnosis-test-active');
                        nextElementRadios.forEach(r => r.disabled = false);     
                    }
                }
            });
        }
    });
}
// button function
testBtn.addEventListener('click', () => {
    let testNmuber = [];
    testArr.forEach((test, index) => {
        if(test.dataset.switch === 'false') {
            testAlert[index].classList.remove('visually-hidden');
            testNmuber.push(index);
            scrollToTargetAdjusted(testArr[testNmuber[0]]);
        } else {
            testAlert[index].classList.add('visually-hidden');
        }
    });
});
// 2024/04/19修改 end
/******/ })()
;
//# sourceMappingURL=diagnose_3_2_3.js.map