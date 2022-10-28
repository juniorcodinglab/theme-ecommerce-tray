(function($) {

    $('.catalog-content .bt-filter').on('click', function(){
        $('.catalog-filter').css({
            'display': 'block',
            'left': '0',
            'visibility': 'visible',
            'appearance': 'auto',
        });
        $('.bg-menu').stop(true, true).fadeIn();
    });

    $('.catalog-content .item-filter-box.bt-order').on('click', function(){
        $('.catalog-content-top').toggle("slow");
    });

    $('.catalog-filter-close button').on('click',function(){
        $('.catalog-filter').css({
            'display': 'none',
            'left': '-100%',
            'visibility': 'hidden',
            'appearance': 'none',
        });
        $('.bg-menu').stop(true, true).fadeOut();
    });

    $('.catalog-filter .slider-range').slider({
    	range: true,
    	min: parseFloat($('.catalog-filter .range-values .min').text().replace('R$ ', '').replace(',', '.')),
    	max: parseFloat($('.catalog-filter .range-values .max').text().replace('R$ ', '').replace(',', '.')),
    	values: [
    		parseFloat($('.catalog-filter .range-values .min').text().replace('R$ ', '').replace(',', '.')),
    		parseFloat($('.catalog-filter .range-values .max').text().replace('R$ ', '').replace(',', '.'))
		],
    	slide: function(event, ui) {
    		$('.catalog-filter .range-values .min').text("R$ " + ui.values[0].toFixed(2).toString().replace('.', ','));
    		$('.catalog-filter .range-values .max').text("R$ " + ui.values[1].toFixed(2).toString().replace('.', ',') );
    	},
    	change: function(event, ui) {
    		var range = $('.catalog-filter .range-values .min').text().replace("R$ ", '').replace(',', '.') + '-' + $('.catalog-filter .range-values .max').text().replace("R$ ", '').replace(',', '.');
    		$('.catalog-filter .range-values input').val(range);
    	}
    });

    $('.item.tamanho .form-control').on('keyup',function(){
        var labels = $(this).parent().parent().find('.item-body-options label');
        var search = $(this).val();
        var regex = new RegExp(search,'gi');
        
        labels.each(function(i, el){
            console.log($(el).attr('data-title').search(regex));
            if ($(el).attr('data-title').search(regex) > 0) {
                console.log(true);
                $(el).addClass('d-flex');
                $(el).removeClass('d-none');
            } else if (search == "") {
                $(el).addClass('d-flex');
            }  else {
                console.log(false);
                $(el).addClass('d-none');
                $(el).removeClass('d-flex');
            }
            
        });
        
        
        
    })

}) (jQuery);