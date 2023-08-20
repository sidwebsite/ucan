// bootstrap
import * as bootstrap from 'bootstrap';
export default function login() {
    const loginFormBtn =  document.querySelector('#loginFormBtn');
    const loginForm = document.querySelector('#loginForm');
    const login = document.querySelector('.login');
    const mediaSize = 991;   
    const loginFormCollapse = new bootstrap.Collapse(loginForm, {
        toggle: false
    });
    loginFormBtn.addEventListener('click', function () {
        loginFormCollapse.toggle();
        login.classList.toggle('open');
        if(window.innerWidth < mediaSize) {
            login.classList.toggle('login-whide');
        }
    });
    loginFormBtn.addEventListener('focus', function () {
        loginFormCollapse.show();
    });
    loginForm.querySelector('#loginBtn').addEventListener('focusout', function () {
        loginFormCollapse.hide();
    });
}