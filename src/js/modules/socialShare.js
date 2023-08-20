import sharer from 'sharer.js';
export default function socialShare() {
    const sharerBtn = document.querySelectorAll('.sharer');
    sharerBtn.forEach((sharer) => {
        sharer.dataset.url = window.location.href;
        sharer.title = document.title;
    });
}
