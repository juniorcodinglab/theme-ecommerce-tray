(function($) {

    var lastScrollTop = 105;
    var $headerMainDesk = $('.header__main-desktop');
    var $headerMainMob = $('.header__main-moblie');
    
    var $headerNavDesk = $('.header__nav-desk');
    var $headerNavMob = $('.header__nav-moblie');

    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        console.log(st);

        if (st > lastScrollTop) {
            $headerMainDesk.addClass('active');
            $headerMainMob.addClass('active');

            $headerNavDesk.addClass('active');
            $headerNavMob.addClass('active');
            $('main.home').css({ marginTop: "124px "})

        } else {
            $headerMainDesk.removeClass('active');
            $headerMainMob.removeClass('active');

            $headerNavDesk.removeClass('active');
            $headerNavMob.removeClass('active');
            $('main.home').css({ marginTop: "0 "})
        }
    })


    $('.header__top-slick').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: false,
    });
    
    
    
    // Menu Moblie
    $('.header-main-moblie-bar').on('click', function () {
        $('.header-nav-moblie').toggleClass('d-block');
        $('.blurry').toggleClass('active');
        $('body').toggleClass('overflow-hidden');
    });

    // Fechar o Menu Moblie pela borda borrada
    $('.blurry').on('click', function () {
        if ($('.header-nav-moblie').hasClass('d-block')) {
            $('.header-nav-moblie').toggleClass('d-block');
            $('.blurry').toggleClass('active');
            $('body').toggleClass('overflow-hidden');
        }
    });

    // Fechar o Menu Moblie pela borda borrada
    $('.header-nav-moblie-top-close').on('click', function () {
        if ($('.header-nav-moblie').hasClass('d-block')) {
            $('.header-nav-moblie').toggleClass('d-block');
            $('.blurry').toggleClass('active');
            $('body').toggleClass('overflow-hidden');
        }
    });
    

    $('.header-nav-desk > ul > li').on('mouseenter', function() {
        $(this).css({'z-index':'100'})
        $('.blurry').addClass('active');
        $('body').addClass('overflow-hidden');
    }).on('mouseleave', function() {
        $(this).css({'z-index':'0'})
        $('.blurry').removeClass('active');
        $('body').removeClass('overflow-hidden');
    });


    $('.header__nav-desk .column li a').on('click', function(e) {
        e.preventDefault();
        $(this).siblings('ul').css("height", "auto");

    })

}) (jQuery);
