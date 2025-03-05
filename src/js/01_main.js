document.addEventListener('DOMContentLoaded', () => {

    Fancybox.bind("[data-fancybox]", {
        // Your custom options
    });

    // Инициализация слайдера на Главной
    (function() {

        const sliderClientsElem = document.querySelector('.slider-clients');

        if (!sliderClientsElem) return;

        const swiperClients = new Swiper('.slider-clients', {
            loop: true,
            speed: 400,
            slidesPerView: 1,
            spaceBetween: 20,

            autoplay: {},

            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },

            navigation: {
                enabled: true,
                nextEl: '.slider-clients__arrow.--next',
                prevEl: '.slider-clients__arrow.--prev',
            },

            breakpoints: {
                // when window width is >= 320px
                840: {
                    spaceBetween: 40,
                    slidesPerView: 5,
                },
            }
        });
    })();

    // Инициализация слайдера в Событии
    (function() {

        const sliderEventElem = document.querySelector('.slider-event');

        if (!sliderEventElem) return;

        const swiperEvent = new Swiper('.slider-event', {
            loop: true,
            speed: 400,
            slidesPerView: 1,

            autoplay: {},

            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },

            navigation: {
                enabled: true,
                nextEl: '.slider-clients__arrow.--next',
                prevEl: '.slider-clients__arrow.--prev',
            },
        });
    })();

    // Кнопка наверх
    (function() {

        const backToTopButton = document.getElementById('backToTop');

        window.addEventListener('scroll', function() {

            if (window.scrollY > 500) {

                backToTopButton.classList.add('show');
            } else {

                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', function(e) {

            e.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    })();
});