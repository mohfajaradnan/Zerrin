$(window).on('load', function() {
    // Swiper Clients
    var swiperClients = new Swiper('.swiper-clients', {
        slidesPerView: 5,
        spaceBetween: 50,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false
        },
        freeMode: true,
        freeModeMomentum: false,
        grabCursor: true,
        allowTouchMove: false,

        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 50
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        }
    });

    // Swiper Testimonials
    var swiperTestimonials = new Swiper('.swiper-testimonials', {
        speed: 1000,
        autoplay: {
            delay: 10000
        },
        slidesPerView: 1,
        loop: true
    });
});
