// Sticky
const Sticky = require('sticky-js');
if(window.innerWidth > 992) {const sticky = new Sticky('[data-sticky]', {})};

// custom select
import NiceSelect from "../../node_modules/nice-select2/dist/js/nice-select2";
const select = document.querySelectorAll(".selectize");
// 2024/10/18修改 start
const addRole = () => {
    document.querySelectorAll('.nice-select li').forEach((li) => {
        li.setAttribute('role', 'button');
    });
}
addRole();
// 2024/09/18修改 end
select.forEach(select => {
    let instance = new NiceSelect(select);
});
