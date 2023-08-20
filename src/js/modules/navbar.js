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
                const subMenu = menuItmeHasChildren.querySelector('.sub-menu');
                subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
            };
        };
    });
}