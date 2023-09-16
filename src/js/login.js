// bootstrap
import * as bootstrap from 'bootstrap';
;(function() {
    const loginFormBtn =  document.querySelector('#loginFormBtn');
    const loginForm = document.querySelector('#loginForm');
    const login = document.querySelector('.login');
    const mediaSize = 991;   
    const loginFormCollapse = new bootstrap.Collapse(loginForm, {
        toggle: false
    });
    loginFormBtn.addEventListener('click', function (e) {
        e.preventDefault();
        loginFormCollapse.toggle();
        login.classList.toggle('open');
        if(window.innerWidth < mediaSize) {
            login.classList.toggle('login-whide');
        }
    });
    loginFormBtn.addEventListener('focus', function () {
        loginFormCollapse.show();
    });
    loginForm.querySelectorAll('a').forEach((link, i , arr) => {
        link.addEventListener('focusout', function () {
            if(i === arr.length - 1) {
                loginFormCollapse.hide();
            }
        });
    });
    // 驗證
    const userName = loginForm.querySelector('#userName');
    const userPassword = loginForm.querySelector('#userPassword');
    const captcha = loginForm.querySelector('#captcha');
    const invalid = loginForm.querySelector('#invalid');
    const loginBtn = loginForm.querySelector('#loginBtn');
    
    loginBtn.addEventListener('click', () => {
        const strArr = [];
        // 
        if(userName.value === '' || userName.value === null) {
            strArr.push('帳號');
            invalid.classList.remove('d-none');
        } else {
            invalid.classList.add('d-none')
        }
        // 
        if(userPassword.value === '' || userPassword.value === null) {
            strArr.push('密碼');
            invalid.classList.remove('d-none');
        } else {
            invalid.classList.add('d-none')
        }
        // 
        if(captcha.value === '' || captcha.value === null ) {
            strArr.push('驗證碼');
            invalid.classList.remove('d-none');
        } else {
            invalid.classList.add('d-none')
        }
        invalid.textContent = `*請輸入${strArr.join('、')}`;
    });
    
})();