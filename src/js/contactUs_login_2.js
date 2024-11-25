// accordion
const questionAccordionBtn = document.querySelectorAll(".contactUsQuestion .accordion-button");
const questionAccordion = document.querySelectorAll(".contactUsQuestion .collapse");
let collapseElementList = [].slice.call(questionAccordion);
let collapseList = collapseElementList.map(function (collapseEl) {
    return new bootstrap.Collapse(collapseEl, {
        toggle: false,
    });
});
questionAccordionBtn.forEach((btn, index) => {
    btn.addEventListener("click", function (e) {
        e.target.classList.toggle("collapsed");
        // 2024/11/20修改 start
        collapseList[index].toggle();
        // 2024/11/20修改 end
    });
});

// 2024/11/20修改 start
import NiceSelect from "../../node_modules/nice-select2/dist/js/nice-select2";
const selects = document.querySelectorAll(".selectize");
selects.forEach((select) => {
    new NiceSelect(select)

    const dropdown = select.nextElementSibling
    const options = dropdown.querySelectorAll(".option")
    options.forEach(option => option.setAttribute("role", "button"))
    
    let focusedIndex = -1

    dropdown.addEventListener("keydown", function (e) {
        if (!dropdown.classList.contains("open")) return

        if (e.key === "ArrowDown") {
            if (focusedIndex < options.length - 1) {
                focusedIndex++
                updateFocus()
            }
        } else if (e.key === "ArrowUp") {
            e.preventDefault()
            focusedIndex--
            updateFocus()
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (focusedIndex >= 0) {
                options[focusedIndex].click()
            }
        }
    });

    function updateFocus() {
        options.forEach((option, index) => {
            if (index === focusedIndex) {
                option.classList.add("focus")
                option.scrollIntoView({ block: 'nearest' })
                const menu = dropdown.querySelector(".nice-select2-dropdown")
                if (menu) {
                    const menuHeight = menu.offsetHeight;
                    const optionTop = option.offsetTop - menu.scrollTop
                    const optionBottom = optionTop + option.offsetHeight
                    
                    if (optionTop < 0) {
                        menu.scrollTop += optionTop;
                    } else if (optionBottom > menuHeight) {
                        menu.scrollTop += optionBottom - menuHeight
                    }
                }
            } else {
                option.classList.remove("focus")
            }
        });
    }
});
// 2024/11/20修改 end