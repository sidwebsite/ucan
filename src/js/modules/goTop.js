export default function goTop() {
    const backToTopButton = document.querySelector('#goTop');
    function scrollFunction(){
        if(window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        };
    };
    window.addEventListener('scroll', scrollFunction);
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}