

// menu__toggle bar
let header = document.querySelector ('header');
let menu__bar = document.querySelector ('.menu__toggle');

menu__bar.onclick = function () {
    header.classList.toggle ('active');
}

// scroll reveal 
ScrollReveal({
    // reset: true,
    distance: '90px',
    duration: 2500,
    delay: 400
})

ScrollReveal().reveal('.hero__content h1', {delay: 500, origin: 'top'});
ScrollReveal().reveal('.hero__content h2, .about__content h4, .service__card h4, .market__card h4', {delay: 600, origin: 'left'});
ScrollReveal().reveal('.hero__content li', {delay: 700, origin: 'left', interval: 300});
ScrollReveal().reveal('.hero__content #hero__btn ', {delay: 1200, origin: 'top'});
ScrollReveal().reveal('.about__content h3, .service-card h3, .market__card h3',{delay: 900, origin: 'left'})
ScrollReveal().reveal('.about__content p, .service__card p, .market__card p',{delay: 1200, origin: 'left'})
ScrollReveal().reveal('.about__card',{delay: 1000, origin: 'bottom'})
ScrollReveal().reveal('.about__img',{delay: 1200, origin: 'right'})
ScrollReveal().reveal('.product__wrap .product, .section_4__card', {delay: 500, origin:'bottom', interval: 200})
ScrollReveal().reveal('.market__img-up', {delay: 500, origin:'bottom'})
ScrollReveal().reveal('.market__img-down', {delay: 600, origin:'bottom'})

// section 3//
ScrollReveal().reveal('.design__context, .section__4, .section__4--wrap--content h4', {delay: 500, origin:'bottom'})
ScrollReveal().reveal('.design__context h4, .section__4, .section__4--wrap--content h2', {delay: 700, origin:'bottom'})
ScrollReveal().reveal('.design__context h3, .section__4, .section__4--wrap--content hr', {delay: 800, origin:'bottom'})
ScrollReveal().reveal('.design__context p', {delay: 900, origin:'bottom'})
ScrollReveal().reveal('.design__context a', {delay: 900, origin:'bottom'})
ScrollReveal().reveal('.float__box', {delay: 900, origin:'right', interval: 200})
