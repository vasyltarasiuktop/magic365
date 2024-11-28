function onScrollDiv() {
    let images = document.querySelectorAll('[data-src]');
    for (let i=0, nb=images.length ; i <nb ; i++) {
        let img = images[i]
        let rect = img.getBoundingClientRect();
        let isVisible = ((rect.top - window.innerHeight) < 500 && (rect.bottom) > -50 ) ? true : false ;
        if (isVisible) {

            if (!img.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                if(img.dataset.sizes){
                    img.sizes = img.dataset.sizes;
                    img.removeAttribute('data-sizes');
                    img.srcset = img.dataset.srcset;
                    img.removeAttribute('data-srcset');
                }
            }
        }
    }
}
window.addEventListener("scroll", function() { onScrollDiv() });
onScrollDiv();
let lang = document.querySelector('.pll-parent-menu-item');
lang.onclick = () => {
    lang.classList.toggle('open');
};
let burger = document.querySelector('.mobile-header__menu');
burger.onclick = () => {
    document.querySelector('.sidebar').classList.toggle('is-open');
};
