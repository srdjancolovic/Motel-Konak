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

    //Landing page elements animation
    const timeline = gsap.timeline({ defaults: { duration: 0.7 } });
    timeline
        .from('.header__logo', { y: -50, opacity: 0 })
        .from('.header__menu-toggler', {
            y: -50,
            opacity: 0,
        })
        .from('.main__info', { y: 50, opacity: 0 });
});

//Check window offset from top to toggle header classes
window.onscroll = () => {
    const scrollFromTop = document.documentElement.scrollTop;

    if (scrollFromTop > 80) {
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
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

//Animations
//Callback function for target
const callback = function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.timeline.play();
        }
    });
};

//Intersection observer
const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
});

///SlideInUp Animation

const slideInUpAnim = document.querySelectorAll('.slideInUp');
slideInUpAnim.forEach(function (item) {
    const action = gsap
        .timeline({ paused: true })
        .from(item, { y: 40, opacity: 0, duration: 0.6, delay: 0.5 });

    item.timeline = action;
});

Array.prototype.forEach.call(slideInUpAnim, (el) => {
    observer.observe(el);
});
