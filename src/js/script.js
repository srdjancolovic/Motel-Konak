//Vars
const header = document.querySelector('.header');
const menuToggler = document.querySelector('.header__menu-toggler');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu__link');
const preloader = document.querySelector('.preloader');
const html = document.querySelector('html');
const topBtn = document.querySelector('.top-btn');

//General toggler function
const togglerFn = () => {
    menuToggler.classList.toggle('header__menu-toggler--open');
    navMenu.classList.toggle('nav-menu--open');
};

//Click events

//Toggle menu fn
menuToggler.addEventListener('click', togglerFn);

//Close nav menu on click anywhere
html.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-menu')) {
        togglerFn();
    }
});

//Close nav menu on navigation link click
navLinks.forEach((link) => {
    link.addEventListener('click', togglerFn);
});

//Sliders

//Menu slider
const menu = new Swiper('.menu-swiper', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

//On load
window.addEventListener('load', () => {
    preloader.classList.add('preloader--hide');

    //Landing page slider
    const landingSwiper = new Swiper('.landing-swiper', {
        speed: 1500,
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        effect: 'fade',
    });
});

//Check window offset from top to toggle header classes
window.onscroll = () => {
    const scrollFromTop = document.documentElement.scrollTop;

    if (scrollFromTop > 80) {
        header.classList.add('header--scrolled');
        // topBtn.classList.add('top-btn--show');
    } else {
        header.classList.remove('header--scrolled');
        // topBtn.classList.remove('top-btn--show');
    }
};

//Lightbox options
lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
});

// Smooth scroll
const ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') != -1) {
    if (ua.indexOf('chrome') > -1) {
        $(' .smooth-scroll').on('click', function (e) {
            if (this.hash !== '') {
                const hash = this.hash;

                $('html, body').animate(
                    {
                        scrollTop: $(hash).offset().top,
                    },
                    700
                );
            }
        });
    } else {
        $(' .smooth-scroll').on('click', function (e) {
            if (this.hash !== '') {
                const hash = this.hash;
                $('html, body').animate(
                    {
                        scrollTop: $(hash).offset().top,
                    },
                    700
                );
            }
        });
    }
}
