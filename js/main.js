$(document).ready(function(){

	var quantity = 1;



	$('#minus').click(function(){

		if ( quantity > 0) {

			quantity--;
		}

		$('#quantityCell').text(quantity);

	});



	$('#plus').click(function(){

		quantity++;

		$('#quantityCell').text(quantity);
	});


		var cartItems = 0;
		var cartTotalPrice = 0;
		var priceOneItem = $('#price').attr('data-price'); // 500

		$('#items-count').text(cartItems); // 0

		$('#price-total').text(cartTotalPrice); // 0

		$('#addToCart').click(function(){

			cartItems = cartItems + quantity; // 5

			cartTotalPrice = cartItems * priceOneItem + '$'; // 5 * 500 = 2500


			$('#items-count').text(cartItems);

			$('#price-total').text(cartTotalPrice);


			quantity = 1;

			$('#quantityCell').text(quantity);


			if( cartItems > 0) {

				$('#cart-empty').hide();

				$('#cart-with-items').show();

				$('#clear-cart').show();
			}



			//---анимация полета товара в корзину --

			var imgToAnimate = $('#productImg');
			var cartIcon = $('#cartIcon');
			var widthImgToAnimate = imgToAnimate.width();

			imgToAnimate.clone().css({

				'width' : widthImgToAnimate,
				'position' : 'absolute',
				'z-index' : '999',
				'top' : imgToAnimate.offset()['top'],
				'left' : imgToAnimate.offset()['left']


			}).appendTo('body').animate({

				opacity = 0.1,
				left: cartIcon.offset()['left'],
				top: cartIcon.offset()['top'],
				width: 50
			}, 1000, function(){

				$(this).remove();

			})

		});


		$('#clear-cart').click(function(){

			cartItems = 0;
			cartTotalPrice = 0;


			$('#items-count').text(cartItems);

			$('#price-total').text(cartTotalPrice);


			$('#cart-with-items').hide();
			$('#cart-empty').show();
			$('#clear-cart').hide();

		});


});