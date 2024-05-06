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
// 2024/05/06修改
const relatedOccupationsAccordionBtn = document.querySelectorAll('#relatedOccupationsAccordion .accordion-collapsed');
const relatedOccupationsAccordion = document.querySelectorAll('#relatedOccupationsAccordion .collapse');
let collapseElementList = [].slice.call(relatedOccupationsAccordion);
let collapseList = collapseElementList.map(function (collapseEl) {
    return new bootstrap.Collapse(collapseEl, {
        toggle: false
    });
});

relatedOccupationsAccordionBtn.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        if(e.target.nodeName === "A") {
            e.stopPropagation();
        } else {
            e.target.classList.toggle('collapsed');
            collapseList[index].toggle();
        }        
    });
});