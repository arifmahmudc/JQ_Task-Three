$(document).ready(function () {
    $(".main-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        fade: true,
        asNavFor: ".slider-nav",
        nextArrow: '<button type="button" class="btn position-absolute slick-next"><i class="fas fa-arrow-right"></i></button>',
        prevArrow: '<button type="button" class="btn position-absolute slick-prev"><i class="fas fa-arrow-left"></i></button>',
    });
    $(".slider-nav").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: 0,
        autoplay: true,
        asNavFor: ".main-slider",
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{ breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 1 } }],
    });
    $(".counter").counterUp({ delay: 10, time: 1000 });
    $("select").niceSelect();
    new TypeIt(".type-text", { strings: ["Welcome to this Webpage | I'm Arif Mahmud"], loop: true, breakLines: false, speed: 40, lifeLike: true, waitUntilVisible: true }).go();
    var containerEl = document.querySelector(".mix_container");
    var mixer = mixitup(containerEl, { selectors: { control: "[our-mixitup-control]" } });
    $("body").niceScroll({
        cursorcolor: "#ff4646",
        cursorwidth: "12px",
        cursorborder: "0px solid #000",
        cursorborderradius: "0px",
        autohidemode: true,
        background: "#ddd",
        hidecursordelay: 400,
        cursorfixedheight: false,
        cursorminheight: 20,
        enablekeyboard: true,
        horizrailenabled: true,
        bouncescroll: false,
        smoothscroll: true,
        iframeautoresize: true,
        touchbehavior: false,
        zindex: 99999,
    });
});
