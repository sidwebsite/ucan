// bootstrap
import * as bootstrap from 'bootstrap';
// scss
import '../scss/style.scss';
// navbar

// go top
import goTop from '../js/modules/goTop';
goTop();

;(function() {
    // header
    const header = document.querySelector('.header');
    let sticky =header.offsetTop;
    function headerDown() {
        if (window.pageYOffset >= sticky) {
            header.classList.add("sticky")
        } else {
            header.classList.remove("sticky");
        }
    }
    window.addEventListener('scroll', headerDown);
    
    // navbar 
    const openNavMenu = document.querySelector('.open-nav-menu');
    const navMenu = document.querySelector('.nav-menu');
    const mediaSize = 991;    
    openNavMenu.addEventListener('click', () => {
        openNavMenu.classList.toggle('change');
        navMenu.classList.toggle('open');
        document.body.classList.toggle('overflow-hidden');
    });
    function collapseSubMenu() {
        navMenu.querySelector('.menu-item-has-children.active .sub-menu').removeAttribute('style');
        navMenu.querySelector('.menu-item-has-children.active').classList.remove('active');
    };
    navMenu.addEventListener('click', (e) => {
        if(e.target.hasAttribute('data-toggle') && window.innerWidth <= mediaSize) {
            const menuItmeHasChildren = e.target.parentElement;
            if(menuItmeHasChildren.classList.contains('active')) {
                collapseSubMenu();
            } else {
                if(navMenu.querySelector('.menu-item-has-children.active')) {
                    collapseSubMenu();
                };
                menuItmeHasChildren.classList.add('active');
                const subMenu = menuItmeHasChildren.querySelector('.sub-menu');
                subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
            };
        };
    });
    // login
    const login = document.querySelector('.login');
    const loginWarpperBtn = document.querySelector('.login-warpper-btn');
    loginWarpperBtn.addEventListener('click', () => {
        login.classList.toggle('open');
        if(window.innerWidth < mediaSize) {
            login.classList.toggle('login-whide');
        }
    });    
})();