$( document ).ready(function() {

	$('.list-group').children().click(function()
		{
			$(this)
				.addClass('active')
				.siblings().removeClass('active');
		});	
	$('.menu-custom li a').click(function(){
		var oldCurrency = $('.currentCurrency').text();
		var newCurrency = $(this).text();

		$(this).text(oldCurrency);
		$('.currentCurrency').text(newCurrency);
	});

});
