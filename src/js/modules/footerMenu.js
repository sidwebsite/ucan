// bootstrap
import * as bootstrap from 'bootstrap';
export default function footerMenu() {
    const footerMenuBtn =  document.querySelector('#footerMenuBtn'),
    footerMenu = document.querySelector('#footerMenu');
    const footerMenuCollapse = new bootstrap.Collapse(footerMenu, {
        toggle: false
    });
    footerMenuBtn.addEventListener('click', function () {
        footerMenuCollapse.toggle();
    });
    footerMenuBtn.addEventListener('focus', function () {
        footerMenuCollapse.show();
});
}