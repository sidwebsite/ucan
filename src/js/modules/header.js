export default function header() {
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
}