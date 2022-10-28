
(function($) {


    $('.home__search li').on('click', function(){
        var index = $(this).data('index');

        $('.home__search-guia li').removeClass('active');
        $(this).addClass('active')

        $('.home__search-content .item').removeClass('active');
        $('.home__search-content .item-' + index).addClass('active');
    });


	$('.cart-bt').on('click', function(){
        $('.cart-total').toggleClass('d-none')
    });

    $('.home .home__slide').slick({
		//autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		arrows: false,
		dots: true,
	});

    $('.home__cars-slick').slick({
		arrows: true,
		dots: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="ri-arrow-left-s-line"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="ri-arrow-right-s-line"></i></button>',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                }
            }
        ]
	});

    $('.home__showcases-slide').slick({
		arrows: false,
		dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ]
	});

    $('.home-categories-slide').slick({
		arrows: true,
		dots: false,
        slidesToShow: 6,
        slidesToScroll: 4,
        prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fas fa-angle-right"></i></i></button>',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ]
	});

    $('button.header-main-moblie-input-close').on('click', function () {
        $('.header-main-moblie-input').addClass('d-none');
    });

    $('.header-main-moblie-search').on('click', function () {
        $('.header-main-moblie-input').removeClass('d-none');
    });

}) (jQuery);