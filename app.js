

// menu__toggle bar
let header =document.querySelector ('header');
let menu__bar = document.querySelector ('.menu__toggle');

menu__bar.onclick = function () {
    header.classList.toggle ('active');
}

