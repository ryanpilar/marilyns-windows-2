/*--------------------------------------------------------------------------------------------

	1. widget-client-carousel function by = owl.carousel.js
	2. Client logo Carousel-3 Carousels  function by = owl.carousel.js
	3. Client logo Carousel-2 Carousels  function by = owl.carousel.js
	4. Client logo Carousel-1  function by = owl.carousel.js
	5. Fade slider function by = owl.carousel.js
	6. Slide slider function by = owl.carousel.js
	7. CounterUp function by = counterup-min.js

---------------------------------------------------------------------------------------------*/	

jQuery(document).ready(function() {

    'use strict';

//  widget-client-carousel function by = owl.carousel.js ========================== //

	jQuery('.widget-client').owlCarousel({
		loop:true,
		autoplay:true,
		items:1,
		nav:false,
		dots:true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
	})	




//  CounterUp function by = counterup-min.js ========================== //

	jQuery('.counter').counterUp({
		delay: 10,
		time: 1000
	});

});

// Document.ready END==set-marker-popup-close============================================================//

