(function ($) {

    $('.product-thumb-dots img').on('mouseenter', function () {
        $(this).parents('.d-flex').find('.item').removeClass('active');
        $(this).parent('.item').addClass('active');
        $('.product-thumb-main img').attr('src', $(this).attr('data-src-full')); 
    });
    
    var $plus = $('<button id="plus">+</button>');
    var $minus = $('<button id="minus">-</button>');
    $('#quantidade label.color').prepend($plus);
    $('#quantidade label.color').append($minus);
  
})(jQuery);