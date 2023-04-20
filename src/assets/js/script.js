// script for slickslider plugin 

$(document).ready(function () {
    $('.lessons__carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        centerMode: true,
        centerPadding: 0,
        infinite: false,
        speed: 950,
        dots: true,
        prevArrow: '<button class="slick-prev"><img src="assets/images/icons/slideLeft.svg" alt="Previous"></button>',
        nextArrow: '<button class="slick-next"><img src="assets/images/icons/slideRight.svg" alt="Next"></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    autoplay: false,
                    dots: true,
                    autoplaySpeed: 0,
                    prevArrow: '<button class="prev_arrow"><img src="assets/images/icons/slideLeft.svg" alt="Previous"></button>',
                    nextArrow: '<button class="next_arrow"><img src="assets/images/icons/slideRight.svg" alt="Next"></button>',

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: '50px',
                    autoplay: false,
                    dots: true,
                    autoplaySpeed: 0,
                    prevArrow: '<button class="prev_arrow"><img src="assets/images/icons/slideLeft.svg" alt="Previous"></button>',
                    nextArrow: '<button class="next_arrow"><img src="assets/images/icons/slideRight.svg" alt="Next"></button>',

                },

            }
        ],
    });
    $('.partners__carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 950,
        dots: true,
        prevArrow: '<button class="slick-prev"><img src="assets/images/icons/slideLeft.svg" alt="Previous"></button>',
        nextArrow: '<button class="slick-next"><img src="assets/images/icons/slideRight.svg" alt="Next"></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    autoplay: false,
                    dots: true,
                    autoplaySpeed: 0,
                    prevArrow: '<button class="prev_arrow"><img src="assets/images/icons/slideLeft.svg" alt="Previous"></button>',
                    nextArrow: '<button class="next_arrow"><img src="assets/images/icons/slideRight.svg" alt="Next"></button>',

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    autoplay: false,
                    dots: true,
                    autoplaySpeed: 0,
                    prevArrow: '<button class="prev_arrow"><img src="assets/images/icons/slideLeft.svg" alt="Previous"></button>',
                    nextArrow: '<button class="next_arrow"><img src="assets/images/icons/slideRight.svg" alt="Next"></button>',

                },

            }
        ],
    });





    // transfering blocks 
    if ($(window).width() < 767) {
        $('.targets__way').appendTo($('.plan-result_wrapper'));
    }
    if ($(window).width() < 767) {
        $('.registration-modal, .modal__close').appendTo($('.overlay'));
    }
});
















//script for pageup <a> tag to make it appear after scrolling 700 pixels
$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});








//removing hover classes on viewports smaller than 767px
function removeFloatShadow() {
    const elements = document.querySelectorAll('.hvr-underline-from-left, .hvr-bob, .hvr-grow');
    elements.forEach(element => {
        element.classList.remove('hvr-underline-from-left', 'hvr-bob', 'hvr-grow');
    });
}
function handleResize() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth < 767) {
        removeFloatShadow();
    }
}
window.addEventListener('resize', handleResize);
handleResize();






// script for menu and hamburger
window.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.promo__nav'),
        menuItem = document.querySelectorAll('.promo__link'),
        hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        nav.classList.toggle('promo__nav_active');
    });
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            nav.classList.toggle('promo__nav_active');
        })
    })
})








//Script for modal windows
const buttons = document.querySelectorAll('.card-btn');
const overlay = document.querySelector('.overlay');
const modals = document.querySelectorAll('.modal');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const modalName = button.dataset.modal;

        if (window.innerWidth < 767) {
            modals.forEach(modal => {
                modal.classList.remove('show');
            });
        }

        const modalToShow = document.getElementById(modalName);
        modalToShow.classList.add('show');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
});
document.querySelectorAll('.modal__close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        modals.forEach(modal => {
            modal.classList.remove('show');
        });
        overlay.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
});
if (window.innerWidth < 767) {
    overlay.removeEventListener('click', () => {
        modals.forEach(modal => {
            modal.classList.remove('show');
        });
        overlay.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
}




// for animate.css animations
const aboutEcoAnim = document.querySelectorAll('.about, .ecosystem');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeInLeft');
            observer.unobserve(entry.target);
        }
    });
});
aboutEcoAnim.forEach(item => {
    observer.observe(item);
});
const gamedevAnim = document.querySelectorAll('.gamedev');
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__fadeInRight');
            observer2.unobserve(entry.target);
        }
    });
});
gamedevAnim.forEach(item => {
    observer2.observe(item);
});




//upscrolling -80px to titles on <767 devices 
if (window.innerWidth < 767) {
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                event.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

















