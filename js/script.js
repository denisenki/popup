let btn = document.querySelector('.more');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('.popup-close');


btn.addEventListener('click', function() {
        overlay.style.display="block";
    });

close.addEventListener('click', function() {
        overlay.style.display="";
    });