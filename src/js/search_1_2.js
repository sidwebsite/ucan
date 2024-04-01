const characterTab = document.querySelectorAll('.nav-phone');
characterTab.forEach(function (triggerEl) {
    let tab = new bootstrap.Tab(triggerEl);
    triggerEl.addEventListener('click', function (event) {
        event.preventDefault();
        triggerEl.classList.remove('active');
        tab.show();
    });
});