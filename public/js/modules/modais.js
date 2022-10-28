(function($){
	if ($('.modal-container').length) {
		var ff_cookie = 'ff_modal_generico_fut';
		var ff_cookie_carrinho = 'ff_modal_generico_fut_carrinho';
		var ff_cookie_value = 'Modal Generico';
		var ff_cookie_domain = "futfanatics.com.br";

		var fechar = $('.modal-container .modal-control .fechar');
		var expand = $('.modal-container .modal-control .expand').css("visibility", "hidden");

		var modal_generico = $('.modal-container').parent();

		var posicaoBottom = 0, togglePosicaoBottom = 0;

		function abrirModal() {
			if (checkCookie(ff_cookie) == "") {
				if (window.location.href.indexOf('carrinho') > 0 && checkCookie(ff_cookie_carrinho) == "") {
					modal_generico.fadeIn("slow");
				} else {
					modal_generico.fadeIn("slow");
				}

				if ($(modal_generico).hasClass('center') && $(window).width() > 768) {
					$('body').addClass('modal-open');
				} else {
					$('body').addClass('modal-fut-open');
				}
			}
		}

		function fecharModalGenerico(close) {
			if (close) {
				setCookie(ff_cookie, ff_cookie_value, 1, ff_cookie_domain);
			}
			

			if (window.location.href.indexOf('carrinho') > 0) {
				setCookie(ff_cookie_carrinho, ff_cookie_value, 1, ff_cookie_domain);
			}

			modal_generico.fadeOut("slow");

			$('body').removeClass('modal-open');
			$('body').removeClass('modal-fut');
		}

		fechar.click(function(){     
			fecharModalGenerico(true);
			return false;
		});

		expand.click(function() {
			if(togglePosicaoBottom == 0){
				togglePosicaoBottom = 1;
				modal_generico.css("bottom", 0);
				margin_chat = modal_generico.height();
			} else {
				modal_generico.css("bottom", "-" + posicaoBottom + "px");
				togglePosicaoBottom = 0;
				margin_chat = modal_generico.height() - posicaoBottom;
			}

			$('.modal-fut-open jdiv .__jivoMobileButton').css('bottom', margin_chat + "px");

			$(this).toggleClass('icon-arrow-down icon-arrow-up');
		});

		function corrigePosicaoBanner(){
			var width = $(window).width(); 
			posicaoBottom = (359 * width) / 768;
			// modal_generico.css("bottom", "-" + posicaoBottom + "px");
			modal_generico.css("bottom", "0px");

			margin_chat = modal_generico.height() - posicaoBottom;
			$('.modal-fut-open .globalClass_ET .__jivoMobileButton').css('bottom', margin_chat + "px");
		}

		corrigePosicaoBanner();

		$(window).resize(function() {
			corrigePosicaoBanner();

			if ($(window).width() <= 768) {
				abrirModal();
			}
		});

		var link = $('.modal-container #link');
		link.click(function(){
			fecharModalGenerico(true);
			location.href = $(this).attr('href');
			return false;
		});

		abrirModal();
	}

	console.log('modais.js');
})(jQuery);
