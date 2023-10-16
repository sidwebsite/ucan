;(function() {
    const loginFormBtn =  document.querySelector('#loginFormBtn');
    const loginForm = document.querySelector('#loginForm');
    const login = document.querySelector('.login');
    const mediaSize = 991;   
    const loginFormCollapse = new bootstrap.Collapse(loginForm, {
        toggle: false
    });
    loginFormBtn.addEventListener('keydown', (e) => {
        let keycode = e.keyCode || e.which;
        if(e.shiftKey && keycode === 9) {
            loginFormCollapse.hide();
        }
    })
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
        let bool = false;
        // 
        if(userName.value === '' || userName.value === null) {
            strArr.push('帳號');
            bool = true;
        } else {
            bool = false;
        }
        // 
        if(userPassword.value === '' || userPassword.value === null) {
            strArr.push('密碼');
            bool = true;
        } else {
            bool = false;
        }
        // 
        if(captcha.value === '' || captcha.value === null ) {
            strArr.push('驗證碼');
            bool = true;
        } else {
            bool = false;
        }
        bool === false ? invalid.textContent = '*號為必填欄位' : invalid.textContent = `*請輸入${strArr.join('、')}`;
    });    
})();