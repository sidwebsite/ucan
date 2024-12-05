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
// diagnosis test function
const switchFun = (bool, radios) => {
    bool === 'true' ? radios.forEach(r => r.disabled = false) : radios.forEach(r => r.disabled = true);
}
// 2024/11/25修改 start
// test options effect function
const testEffect = (el, index) => {
    diagnosisTest.forEach((test, i) => {
        i === index ? test.classList.add('diagnosis-test-active') : test.classList.remove('diagnosis-test-active')
    })
    
    const testEnd = diagnosisTest.length - 1;
    // block alert
    !testAlert[index].classList.contains('visually-hidden') ? testAlert[index].classList.add('visually-hidden') : false;
    
    // 開啟一下題radio
    if(el === 'false') {
        el = 'true'
        if(index !== testEnd) {
            const nextElement = diagnosisTest[index + 1];
            const nextElementRadios = nextElement.querySelectorAll('.radio > input[type="radio"]');
            nextElementRadios.forEach(r => r.disabled = false);     
        }
    }
}
const testArr = [...diagnosisTest]
for (let i = 0; i < diagnosisTest.length; i++) {
    const element = diagnosisTest[i]
    const radios = element.querySelectorAll('.radio > input[type="radio"]');
    if(i === 0) {
        radios.forEach(r => r.disabled = false)
        element.classList.add('diagnosis-test-active');
    } else {
        radios.forEach(r => r.disabled = true)
    };
    // // change 
    radios.forEach((radio) => {
        if(radio.checked === true) {
            element.dataset.switch = 'true';
            switchFun(element.dataset.switch, radios);
        } else {
            // keydown
            radio.addEventListener('keydown', (e) => {
                if(e.key === 'Tab') {
                    element.dataset.switch = 'true';
                    testEffect(element.dataset.switch, i)
                }
            })
            // click
            radio.addEventListener('click', () => {
                element.dataset.switch = 'true'
                testEffect(element.dataset.switch, i)
            });
            // focus
            radio.addEventListener('focus', () => {
                radio.checked = true
                testEffect(element.dataset.switch, i)
            })
        }
    });
}
// 2024/11/25修改 end
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
/******/ })()
;
//# sourceMappingURL=diagnose_3_2_3.js.map