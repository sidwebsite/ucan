export default function footerMenu() {
    const footerMenuBtn =  document.querySelector('#footerMenuBtn'),
    footerMenu = document.querySelector('#footerMenu');
    const footerMenuCollapse = new bootstrap.Collapse(footerMenu, {
        toggle: false
    });
    footerMenuBtn.addEventListener('click', function () {
        const span = footerMenuBtn.querySelector('span');
        const icon = footerMenuBtn.querySelector('.fa-solid');
        const onText = '點選展開';
        const offText = '點選收合';
        footerMenuCollapse.toggle();
        footerMenuBtn.classList.toggle('open');
        if(footerMenuBtn.classList.contains('open')){
            span.textContent = offText;
            footerMenuBtn.setAttribute('title', offText);
            footerMenuBtn.setAttribute('aria-label', offText);
            icon.classList.add('fa-circle-arrow-up');
            icon.classList.remove('fa-circle-arrow-down');
        } else {
            span.textContent = onText;
            footerMenuBtn.setAttribute('title', onText);
            footerMenuBtn.setAttribute('aria-label', onText);
            icon.classList.add('fa-circle-arrow-down');
            icon.classList.remove('fa-circle-arrow-up');
        }
        
    });
    footerMenuBtn.addEventListener('focus', function () {
        footerMenuCollapse.show();
});
}