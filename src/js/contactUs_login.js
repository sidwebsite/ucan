// accordion
const questionAccordionBtn = document.querySelectorAll('.contactUsQuestion .accordion-button')
const questionAccordion = document.querySelectorAll('.contactUsQuestion .collapse');
let collapseElementList  = [].slice.call(questionAccordion);
let collapseList = collapseElementList.map(function (collapseEl) {
    return new bootstrap.Collapse(collapseEl, {
        toggle: false
    });
});
questionAccordionBtn.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        collapseList[index].toggle();
    });
});
// custom selcet
import NiceSelect from "../../node_modules/nice-select2/dist/js/nice-select2";
const select = document.querySelectorAll(".selectize");
select.forEach(select => {
    let instance = new NiceSelect(select);
});