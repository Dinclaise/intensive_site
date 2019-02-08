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

		$('#items-count').text(cartItems);

		$('#price-total').text(cartTotalPrice);

		$('#addToCart').click(function(){
			console.log('Click Add to cart!!!');
		})



});