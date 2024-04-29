const recodeCollapseBtn = document.querySelectorAll('.recode-collapse-btn')
const recodeCollapse = document.querySelectorAll('.recode-collapse ');  // 2024/4/25修改
let collapseElementList  = [].slice.call(recodeCollapse);
let collapseList = collapseElementList.map(function (collapseEl) {
    return new bootstrap.Collapse(collapseEl, {
        toggle: false
    });
});
recodeCollapseBtn.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        collapseList[index].toggle();
        btn.classList.toggle('recode-btn-rotate');
    });
});