var lastIndex = 1;
var marker = document.querySelector('.marker');
var slides = document.querySelector('.slides');
var linkImages = document.querySelectorAll('.link img');
function slide(index) {
    marker.style.transform = `rotateZ(calc((-180deg / 4) * ${index} + 45deg))`;
    if(lastIndex === index) return;
    linkImages[index - 1].style.filter = 'invert(0)';
    linkImages[lastIndex - 1].style.filter = 'invert(.9)';
    slides.style.transform = `translateX(-${(300 - 15) * (index - 1)}px)`; // 15px is gap
    lastIndex = index;
}