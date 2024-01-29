// Sticky
const Sticky = require('sticky-js');
if(window.innerWidth > 992) {const sticky = new Sticky('[data-sticky]', {})};

// custom select
import NiceSelect from "../../node_modules/nice-select2/dist/js/nice-select2";
const select = document.querySelectorAll(".selectize");
select.forEach(select => {
    let instance = new NiceSelect(select);
});