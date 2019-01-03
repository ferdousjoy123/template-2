$(function ($) {
    'use strict';

    //Wow pluging start
    new WOW().init();

    //scrollspy menu
    $('body').scrollspy({
        target: '.custom_nav',
        offset: 81
    });

    var htmlBody = $('html, body');

    // this is for back to top
    var bc2top = $('.bc2top');
    bc2top.on('click', function () {
        htmlBody.animate({
            scrollTop: 0
        }, 500);
    });

    //animation scroll js
    $('a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                htmlBody.animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });

    //    menu part
    var menuTop = $('.menu_bar').offset().top;

    //alert(manuTop);

    $(window).on('scroll', function () {

        var scroTOP = $(window).scrollTop();

        if (scroTOP > menuTop) {
            $('.menu_bar').addClass("menu_fix");
        } else {
            $('.menu_bar').removeClass("menu_fix");
        }

    });

    //    banner part start
    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        fade: true,
        dots: true,
        speed: 1500,
        prevArrow: '<i class="fas fa-long-arrow-alt-left arrow_prev_banner"></i>',
        nextArrow: '<i class="fas fa-long-arrow-alt-right arrow_next_banner"></i>',
    });

    //    counter plugin start
    $('.number_count').counterUp({
        delay: 10,
        time: 3000
    });

    //    Filterizr start
    $('.filtr-container').filterizr();

    //    team plugin start
    $('.team_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.team_text',
        dots: false,
        centerMode: true,
        centerPadding: false,
        autoplay: true,
        prevArrow: '<i class="fas fa-long-arrow-alt-left arrow_prev"></i>',
        nextArrow: '<i class="fas fa-long-arrow-alt-right arrow_next"></i>',


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
    }
]
    });

    $('.team_text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.team_slider',
    });

    //    progress bar start
    $('#bar1').barfiller({
        barColor: '#37a000',
        tooltip: true,
        duration: 1000,
        animateOnResize: true,
    });

    $('#bar2').barfiller({
        barColor: '#37a000',
        tooltip: true,
        duration: 1000,
        animateOnResize: true,
    });

    $('#bar3').barfiller({
        barColor: '#37a000',
        tooltip: true,
        duration: 1000,
        animateOnResize: true,
    });

    $('#bar4').barfiller({
        barColor: '#37a000',
        tooltip: true,
        duration: 1000,
        animateOnResize: true,
    });


    //  feedback plugin start
    $('.slick_2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
    });

    //  our blog plugin start
    $('.slick_3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        prevArrow: '<i class="fas fa-long-arrow-alt-left blog_prev"></i>',
        nextArrow: '<i class="fas fa-long-arrow-alt-right blog_next"></i>',


        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    }
]
    });

    //  client plugin start
    $('.slick_4').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerPadding: false,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    }
]
    });

    //  video plugin
    $('.venobox').venobox();


    //  back to top button start
    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();

        if (scroll > 200) {
            $(".back_to_top").fadeIn(1000);
        } else {
            $(".back_to_top").fadeOut(500);
        }
    });

    $(".back_to_top").click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 1000)
    });

    //back to top button end







});
