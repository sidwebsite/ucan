import NiceSelect from "../../node_modules/nice-select2/dist/js/nice-select2";
const select = document.querySelectorAll(".selectize");
select.forEach(select => {
    let instance = new NiceSelect(select);
});
const options = [
    {
        value: '0',
        option: ["就業途徑","建築規劃設計","營造及維護"]
    },
    {
        value: '1',
        option: ["01","02","03","04"]
    },
    {
        value: '2',
        option: ["A", "B", "C", "D", "E"]
    },
];
const optionType = document.querySelector('#optionType');
const optionTypeClidn = document.querySelector('#optionTypeClidn');
let optionTypeClidnSelect = new NiceSelect(optionTypeClidn);
// options Init
let optionsInit = options[0].option;
optionTypeClidn.length = 0;
for (let i = 0; i < optionsInit.length; i++) {
    optionTypeClidn.options[optionTypeClidn.options.length] = new Option(optionsInit[i], optionsInit[i]);
}
optionTypeClidnSelect.update();
// optionType change
optionType.addEventListener('change', (e) => {
    let optionElement = options[e.target.value].option;
    optionTypeClidn.length = 0;
    for (let i = 0; i < optionElement.length; i++) {
        optionTypeClidn.options[optionTypeClidn.options.length] = new Option(optionElement[i], optionElement[i]);
    }
    optionTypeClidnSelect.update();
});