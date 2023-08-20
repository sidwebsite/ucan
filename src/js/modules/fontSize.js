export default function fontSize() {
    const fontSize = document.querySelectorAll('.font-size');
    function removeActive(index1){
        fontSize.forEach((btn2, index2) => {
            if(index1 !== index2){
                btn2.classList.remove("active");
            }
        })
    }
    fontSize.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            btn.classList.toggle("active");
            removeActive(index);
        });
    });

    const fontLarge = document.querySelector('#font-large'),
    fontNormal = document.querySelector('#font-normal'),
    fontSmall = document.querySelector('#font-small');

    fontLarge.addEventListener('click', () => {
        document.body.style.fontSize = '1.15rem';
    });
    fontNormal.addEventListener('click', () => {
        document.body.style.fontSize = '1rem';
    });
    fontSmall.addEventListener('click', () => {
        document.body.style.fontSize = '0.875rem';
    });
}