$(function () {
    //sticky header

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $('.header').addClass('header__sticky')
        } else {
            $('.header').removeClass('header__sticky')
        }
    });

    $('.burger-btn, .mobile-menu__logo, .select-lang__item, .social__link--mobile, .main-menu__item--mobile').on('click', function () {
        $('.logo').toggleClass('logo-menu');
        $('.mobile-menu__inner').toggleClass('mobile-menu__inner--active');
        $('.overlay').toggleClass('overlay--active');
        $('body').toggleClass('lock');
    });

    //filter-menu catalog
    $('.sidebar-btn, .category__link').on('click', function () {
        $('.menu').toggleClass('menu--active');
        $('.sidebar').toggleClass('sidebar--active');
        $('.overlay').toggleClass('overlay--filter');
        $('body').toggleClass('lock--filter');
    });

    $('.category__sort').styler()

    $('.price-filter__number').styler()

    new Swiper('.product-slider', {
        navigation: {
            nextEl: '.product-slider__button--next',
            prevEl: '.product-slider__button--prev'
        },
        spaceBetween: 20,
        slidesPerView: 1,
        centeredSlides: true,
        thumbs: {
            swiper: {
                el: '.slider-mini',
                slidesPerView: 5,
            }
        }
    });

    new Swiper('.costomers-slider', {
        pagination: {
            el: '.costomers-slider__pagination',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.5,
            },

            450: {
                slidesPerView: 2,
            },

            550: {
                slidesPerView: 2.5,
            },

            700: {
                slidesPerView: 3.5,
            },

            992: {
                slidesPerView: 4.5,
            },
        },
        spaceBetween: 10,
    });
})