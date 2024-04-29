export default function navbar() {
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
            };
        };
    });
    // 
    const collapsedBtn = document.querySelectorAll('.menu .navbar-collapsed')
    const collapse = document.querySelectorAll('.menu .collapse');
    let collapseElementList  = [].slice.call(collapse);
    let collapseList = collapseElementList.map(function (collapseEl) {
        return new bootstrap.Collapse(collapseEl, {
            toggle: false
        });
    });
    collapsedBtn.forEach((btn, index) => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.target.classList.toggle('collapsed');
            collapseList[index].toggle();
        });
        btn.addEventListener('focus', function(e) {
            e.preventDefault();
            collapseList[index].toggle();
        });
    });
}