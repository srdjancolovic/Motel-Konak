//Vars
const header = document.querySelector('.header');
const menuToggler = document.querySelector('.header__menu-toggler');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu__link');
const preloader = document.querySelector('.preloader');

const html = document.querySelector('html');

const togglerFn = () => {
    menuToggler.classList.toggle('header__menu-toggler--open');
    navMenu.classList.toggle('nav-menu--open');
    if (header.classList.contains('header--scrolled')) {
        console.log(true);
        header.classList.toggle('header--scrolled-transparent');
    }
};

//Click events
menuToggler.addEventListener('click', togglerFn);

html.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-menu')) {
        togglerFn();
    }
});

navLinks.forEach((link) => {
    link.addEventListener('click', togglerFn);
});

const swiper = new Swiper('.mySwiper', {
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    effect: 'fade',
});

//On load

window.addEventListener('load', () => {
    preloader.classList.add('preloader--hide');
});

window.onscroll = () => {
    const scrollFromTop = document.documentElement.scrollTop;

    if (scrollFromTop > 80) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
};
