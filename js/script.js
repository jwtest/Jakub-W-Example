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

	$('.master-checkbox').click(function(){
		if($(this).is(":checked")){
			$('#dashboard-table tr input').prop('checked', true);
		}
		else{
			$('#dashboard-table tr input').prop('checked', false);
		}
	});

		var $dims = {

		width: null,

		height: null

		};  

		

		$(function () {


		  $(window).bind( "resize", function ( event ) {

		    var $this = $(this);

		    $.each( $dims, function (key) {

		      $dims[ key ] = $this[ key ]();

		      if($dims.width!=null &&$dims.width<=767){
			 	var tempMenu = $('sidebar').children();
			 	$('sidebar').removeClass('col-lg-2');
			 	$('.menu-mobile').addClass('active-menu-mobile');
			 	$('.menu-mobile').append(tempMenu);
			 }
			 if($dims.width!=null && $dims.width>767){
			 	var tempMenu = $('.menu-mobile').children();
			 	$('sidebar').append(tempMenu);
			 	$('sidebar').addClass('col-lg-2');
			 	$('.menu-mobile').removeClass('active-menu-mobile');
			 }


		    });


		  });

		});





	 

});

