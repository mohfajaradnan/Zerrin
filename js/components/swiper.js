$(window).load(function(){
    // Swiper Clients
    var swiper = new Swiper('.swiper-clients', {
    slidesPerView: 5,
    spaceBetween: 50,
    loop: true,
    speed: 3000, // lebih cepat geraknya
    autoplay: {
        delay: 0, // delay 0 biar terus jalan
        disableOnInteraction: false
    },
    freeMode: true,
    freeModeMomentum: false,

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


    // Swiper Clients
    var swiper = new Swiper('.swiper-testimonials', {
        speed: 1000,
        autoplay: 10000,
        slidesPerView: 1,
        loop: true,
    });
});
