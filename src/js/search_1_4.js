const openModelBtn = document.querySelectorAll('#linksGroup > a');
const navbarLinks = document.querySelectorAll('.navbar-link');
const navbarModal = new bootstrap.Modal(document.getElementById('navbarModal'),{
    backdrop: "static",
    keyboard: false
});
// 
function scrollToTargetAdjusted(id) {
    const element = document.querySelector(id);
    const headerOffset = 100;
    let elementPosition = element.getBoundingClientRect().top;
    let offsetPosition = window.pageYOffset === 0 ? elementPosition + window.pageYOffset - (headerOffset + 80) : elementPosition + window.pageYOffset - headerOffset;
    console.log(window.pageYOffset);
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });   
}
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarModal.show();
    })
})
openModelBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        navbarModal.hide();
        const idName = btn.getAttribute('href');
        scrollToTargetAdjusted(idName);
    })
});