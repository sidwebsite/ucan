const characterTab = document.querySelectorAll('#characterTab .nav-phone');
let triggerTabList = [].slice.call(characterTab)
triggerTabList.forEach(function (triggerEl) {
    let tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (e) {
        e.preventDefault()
        characterTab.forEach((nav) => {
            nav.classList.remove('active');
        });
        console.log(tabTrigger);
        tabTrigger.show()
    });
});