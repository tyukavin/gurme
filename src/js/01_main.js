document.addEventListener('DOMContentLoaded', () => {

    // Инициализация слайдера на Главной
    (function() {

        const swiper = new Swiper('.swiper', {
            loop: true,
            speed: 400,
            spaceBetween: 40,
            slidesPerView: 5,

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