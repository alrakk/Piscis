//________Hamburguer Menu__________
$(function(){

	var isOpen = false; 

	$('.bars').on('click', function(){

		if(isOpen == false){
			$('.menu-list').addClass('open'); 

			$('.bars>i')
			.removeClass('.bars')
			.addClass('fa-times'); 

			isOpen = true; 
		
		}else{

			$('.menu-list').removeClass('open'); 

			$('.bars>i')
			.removeClass('fa-times') 
			.addClass('fa-bars'); 

			isOpen = false; 


		}
	}); 

}); 

//-------------------Scroll Menu-------------------//

$(function(){

	var menuOffset= $('.nav2').offset();

	$(document).on('scroll',function(){

		var scrollTop = $(document).scrollTop();

		if(scrollTop > menuOffset.top){

			$('.nav2').addClass('fixed');

		}else{

			$('.nav2').removeClass('fixed');

		}
	});

	//----------------Active Menu-------------------//

	var section1OffsetTop = $('.section1').offset().top;
	var section2OffsetTop = $('.section2').offset().top;
	var section3OffsetTop = $('.section3').offset().top;
	var section4OffsetTop = $('.section4').offset().top;
	var section5OffsetTop = $('.section5').offset().top;

	$(document).on('scroll',function(){

		var scrollTop = $(document).scrollTop();
		var activeLi;

		if(scrollTop < section2OffsetTop){
			activeLi = $('.menu-list>li:nth-child(1)');

		}else if (scrollTop < section3OffsetTop){
			activeLi = $('.menu-list>li:nth-child(2)');

		}else if (scrollTop < section4OffsetTop){
			activeLi = $('.menu-list>li:nth-child(3)');

		}else if (scrollTop < section5OffsetTop){
			activeLi = $('.menu-list>li:nth-child(4)');

		}else{
			activeLi = $('.menu-list>li:nth-child(5)');
		}

		activeLi.addClass('active');
		$('.menu-list>li').not(activeLi).removeClass('active');

	});

//-----------------------Smooth Scrolling----------------//

$('[data-to]').on('click',function(e){
		e.preventDefault();
		var target = $(this).data('to');
		var scrollTo = $('.'+target).offset().top;

		$('html,body').animate({scrollTop:scrollTo},1000);

	});

});

//---------------------Pop up Reservation Button/Form--------------//


$(function(){

	$('.modalControl').on('click',function(e){  // e is the event will be trigger in the function
		e.preventDefault();

		$('.overlay').removeClass('hide');
		$('.modal').removeClass('hide');

		setTimeout(function(){
			$('.overlay').addClass('fadeIn');
			$('.modal').addClass('fadeIn');

		}); //1 milisecond change opacity in a click


	});

	$('.modalDismiss').on('click',function(){
		$('.overlay').removeClass('fadeIn');
		$('.overlay').one('transitionend',function(){
			$(this).addClass('hide');
		});
	});

	$('.modalDismiss').on('click',function(){
		$('.modal').removeClass('fadeIn');
		$('.modal').one('transitionend',function(){
			$(this).addClass('hide');
		});

	});

});

//----------------------------Menu------------------------------//

$(function(){

	$('.menu1').on('click',function(e){ 
		e.preventDefault();

		$('.overlay').removeClass('hide');
		$('.modal2').removeClass('hide');

		setTimeout(function(){
			$('.overlay').addClass('fadeIn');
			$('.modal2').addClass('fadeIn');

		}); 


	});

	$('.modalDismiss').on('click',function(){
		$('.overlay').removeClass('fadeIn');
		$('.overlay').one('transitionend',function(){
			$(this).addClass('hide');
		});
	});

	$('.modalDismiss').on('click',function(){
		$('.modal2').removeClass('fadeIn');
		$('.modal2').one('transitionend',function(){
			$(this).addClass('hide');
		});

	});

});
//-----------------------Menu Plato Fuerte---------------------//
$(function(){

	$('.menu2').on('click',function(e){ 
		e.preventDefault();

		$('.overlay').removeClass('hide');
		$('.modal3').removeClass('hide');

		setTimeout(function(){
			$('.overlay').addClass('fadeIn');
			$('.modal3').addClass('fadeIn');

		}); 


	});

	$('.modalDismiss').on('click',function(){
		$('.overlay').removeClass('fadeIn');
		$('.overlay').one('transitionend',function(){
			$(this).addClass('hide');
		});
	});

	$('.modalDismiss').on('click',function(){
		$('.modal3').removeClass('fadeIn');
		$('.modal3').one('transitionend',function(){
			$(this).addClass('hide');
		});

	});

});

//---------------------Menu Especialidades-----------------------//

$(function(){

	$('.menu3').on('click',function(e){ 
		e.preventDefault();

		$('.overlay').removeClass('hide');
		$('.modal4').removeClass('hide');

		setTimeout(function(){
			$('.overlay').addClass('fadeIn');
			$('.modal4').addClass('fadeIn');

		}); 


	});

	$('.modalDismiss').on('click',function(){
		$('.overlay').removeClass('fadeIn');
		$('.overlay').one('transitionend',function(){
			$(this).addClass('hide');
		});
	});

	$('.modalDismiss').on('click',function(){
		$('.modal4').removeClass('fadeIn');
		$('.modal4').one('transitionend',function(){
			$(this).addClass('hide');
		});

	});

});

//-------------------Menu Postre-----------------------------------//

$(function(){

	$('.menu4').on('click',function(e){ 
		e.preventDefault();

		$('.overlay').removeClass('hide');
		$('.modal5').removeClass('hide');

		setTimeout(function(){
			$('.overlay').addClass('fadeIn');
			$('.modal5').addClass('fadeIn');

		}); 


	});

	$('.modalDismiss').on('click',function(){
		$('.overlay').removeClass('fadeIn');
		$('.overlay').one('transitionend',function(){
			$(this).addClass('hide');
		});
	});

	$('.modalDismiss').on('click',function(){
		$('.modal5').removeClass('fadeIn');
		$('.modal5').one('transitionend',function(){
			$(this).addClass('hide');
		});

	});

});

//---------------------------MAP-------------------------------------//

function initMap() {
        var myLocation = {lat: 19.4931363, lng: -99.2470151};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: myLocation
        });
        var marker = new google.maps.Marker({
          position: myLocation,
          map: map
        });

       var infoWindow = new google.maps.InfoWindow({
		    	content: '<div id="content">Restaurante Piscis</div>'
		  		});

		     infoWindow.open(map,marker);

}