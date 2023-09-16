export default function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const el = parentSelector.firstElementChild;
    let autoPlay = false;
    let i = parentSelector.clientWidth;
    let marquee = null;
    const max = -el.clientWidth;
    // 
    const len = parentSelector.querySelectorAll('a').length 
    if( len > 1 ) {
        parentSelector.insertAdjacentHTML('beforeend', clone);
        parentSelector.insertAdjacentHTML('beforeend', clone);
    }
    // 
    marquee = setInterval(marqueeFun, speed);    
    // stop
    function marqueeStop() {
        autoPlay = false;
        clearInterval(marquee)
        
    };
    // play
    function marqueePlay() {
        if(!autoPlay) {
            autoPlay = true;
            marquee = setInterval(marqueeFun, speed);
        }
    };

    function marqueeFun() {
        el.style.marginLeft = `${i}px`;
        if (i < max) {
            len > 1 ? i = 0 : i = parentSelector.clientWidth;
        }
        i-- ;
    }
    el.style.marginLeft = `${parentSelector.clientWidth}px`;
    // mouse
    el.addEventListener('mouseover', marqueeStop);
    el.addEventListener('mouseout', marqueePlay);
}