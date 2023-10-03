// bootstrap
import * as bootstrap from 'bootstrap';
;(function(){
    const winHash = window.location.hash;
    const triggerEl = document.querySelector(`#newsTabs button[data-bs-target="${winHash}"]`);
    const tab = new bootstrap.Tab(triggerEl)
    tab.show();
})();