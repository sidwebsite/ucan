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
// 2024/09/24修改 start
const addRole = () => {
    document.querySelectorAll('.nice-select li').forEach((li) => {
        li.setAttribute('role', 'button');
    });
}
// 2024/09/24修改 end
// custom selcet
import NiceSelect from "../../node_modules/nice-select2/dist/js/nice-select2";
const select = document.querySelectorAll(".selectize");
select.forEach(select => {
    let instance = new NiceSelect(select);
});
// 2024/09/24修改 start
addRole();
// 2024/09/24修改 end