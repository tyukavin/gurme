document.addEventListener('DOMContentLoaded', () => {

    Fancybox.bind("[data-fancybox]", {});

    // Кнопка меню
    (function() {

        const openMenu = document.querySelector(".btn-menu");
        const closeMenu = document.querySelector(".mobile-menu .close");
        const mobileMenu = document.querySelector(".mobile-menu");
        const html = document.querySelector("html");

        openMenu.addEventListener("click", function() {
            mobileMenu.classList.add("show");
            html.classList.add("no-scroll");
        });

        closeMenu.addEventListener("click", function() {
            mobileMenu.classList.remove("show");
            html.classList.remove("no-scroll");
        });
    })();

    (function() {

        const handleCheckboxGroup = (name) => {
            const checkboxes = document.querySelectorAll(`input[name="${name}"]`);

            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        checkboxes.forEach(otherCheckbox => {
                            if(otherCheckbox !== this) {
                                otherCheckbox.checked = false;
                            }
                        });
                    }
                });
            });
        };

        // Инициализация для группы чекбоксов с name="city"
        handleCheckboxGroup('city');
        handleCheckboxGroup('arenda-bokal');
        handleCheckboxGroup('arenda-stol');
    })();

    // Маски для полей
    (function() {
        Inputmask({
            mask: "+7 (999) 999-99-99",
            showMaskOnHover: false
        }).mask("[type='tel']");
    })();

    // Раскрытие подменю
    (function() {

        $('.js-submenu').click(function() {

            $(this).parent().find('.sub-menu').slideToggle();
        });
    })();

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

            autoplay: false,

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
                840: {
                    autoplay: {
                        enabled: true,
                        delay: 4000,
                    },
                },
            }
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