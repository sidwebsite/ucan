import printJS from 'print-js';
export default function print() {
    const print = document.querySelector('#print');
    print.addEventListener('click', () => {
        printJS({
            printable: 'content',
            type: 'html',
            css: 'css/style.css',
            scanStyles: false
        });
    });
}
