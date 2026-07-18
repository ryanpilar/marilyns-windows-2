/* =====================================
All JavaScript fuctions Start
======================================*/

/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
 /* 

	> Top Search bar Show Hide function by = custom.js  
	> On scroll content animated function by = Viewportchecker.js 	
	> Video responsive function by = custom.js 
	> magnificPopup function	by = magnific-popup.js
	> magnificPopup for video function	by = magnific-popup.js
	> Vertically center Bootstrap modal popup function by = custom.js
	> Main menu sticky on top  when scroll down function by = custom.js
	> page scroll top on button click function by = custom.js	
	> input type file function by = custom.js	 
	> input Placeholder in IE9 function by = custom.js
	> footer fixed on bottom function by = custom.js	
	> accordion active calss function by = custom.js
    > Nav submenu show hide on mobile by = custom.js
	> Vertical Nav submenu show hide on mobile by = custom.js
    > Hover Tab  function

	
 */	

/*--------------------------------------------------------------------------------------------
	window on load ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
 /* 
	 > equal each box
	 > text animation function 
	 > masonry function function by = isotope.pkgd.min.js
	 > page loader function by = custom.js
 */	
 
/*--------------------------------------------------------------------------------------------
	Window Scroll ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
 /*
 	 > Window on scroll header color fill 
 */

/*--------------------------------------------------------------------------------------------
	Window Resize ALL FUNCTION START
---------------------------------------------------------------------------------------------*/

(function ($) {
	
    'use strict';
	/*--------------------------------------------------------------------------------------------
		document.ready ALL FUNCTION START
	---------------------------------------------------------------------------------------------*/	

	//  > Top Search bar Show Hide function by = custom.js =================== //	
	 function site_search(){
			jQuery('a[href="#search"]').on('click', function(event) {                    
			jQuery('#search').addClass('open');
			jQuery('#search > form > input[type="search"]').focus();
		});
					
		jQuery('#search, #search button.close').on('click keyup', function(event) {
			if (event.target === this || event.target.className === 'close') {
				jQuery(this).removeClass('open');
			}
		});  
	 }	
	 
	// > Video responsive function by = custom.js ========================= //	
	function video_responsive(){	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
	}  

	// Magnific popup removed (unused).

// Vertically center Bootstrap modal popup function by = custom.js ==============//
	function popup_vertical_center(){	
		jQuery(function() {
			function reposition() {
				var modal = jQuery(this),
				dialog = modal.find('.modal-dialog');
				modal.css('display', 'block');
				// Dividing by two centers the modal exactly, but dividing by three 
				// or four works better for larger screens.
				dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
			}
			// Reposition when a modal is shown
			jQuery('.modal').on('show.bs.modal', reposition);
			// Reposition when the window is resized
			jQuery(window).on('resize', function() {
				jQuery('.modal:visible').each(reposition);
			});
		});
	}

	// > page scroll top on button click function by = custom.js ===================== //	
	function scroll_top(){
		jQuery("button.scroltop").on('click', function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

		jQuery(window).on("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
	}

	// > input type file function by = custom.js ========================== //	 	 
	function input_type_file_form(){
		jQuery(document).on('change', '.btn-file :file', function() {
			var input = jQuery(this),
				numFiles = input.get(0).files ? input.get(0).files.length : 1,
				label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [numFiles, label]);
		});

		jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
			var input = jQuery(this).parents('.input-group').find(':text'),
				log = numFiles > 10 ? numFiles + ' files selected' : label;
			if (input.length) {
				input.val(log);
			} else {
				if (log) alert(log);
			}
		});	
	}

	// > input Placeholder in IE9 function by = custom.js ======================== //	
	function placeholderSupport(){
	/* input placeholder for ie9 & ie8 & ie7 */
		jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
		/* input placeholder for ie9 & ie8 & ie7 end*/
		/*fix for IE7 and IE8  */
		if (!jQuery.support.placeholder) {
			jQuery("[placeholder]").on('focus', function () {
				if (jQuery(this).val() === jQuery(this).attr("placeholder")) jQuery(this).val("");
			}).blur(function () {
				if (jQuery(this).val() === "") jQuery(this).val(jQuery(this).attr("placeholder"));
			}).blur();

			jQuery("[placeholder]").parents("form").on('submit', function () {
				jQuery(this).find('[placeholder]').each(function() {
					if (jQuery(this).val() === jQuery(this).attr("placeholder")) {
						 jQuery(this).val("");
					}
				});
			});
		}
		/*fix for IE7 and IE8 end */
	}	

	// > accordion active calss function by = custom.js ========================= //	
	function accordion_active() {
		$('.acod-head a').on('click', function() {
			$('.acod-head').removeClass('acc-actives');
			$(this).parents('.acod-head').addClass('acc-actives');
			$('.acod-title').removeClass('acc-actives'); //just to make a visual sense
			$(this).parent().addClass('acc-actives'); //just to make a visual sense
			($(this).parents('.acod-head').attr('class'));
		 });
	}	

	//________Nav submenu show hide on mobile by = custom.js________//
	function mobile_nav(){
		jQuery(".sub-menu, .mega-menu").parent('li').addClass('has-child');
		jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");

		jQuery('.has-child a+.submenu-toogle').on('click',function(ev) {

			jQuery(this).parent().siblings(".has-child ").children(".sub-menu, .mega-menu").slideUp(500, function(){
				jQuery(this).parent().removeClass('nav-active');
			});

			jQuery(this).next(jQuery('.sub-menu, .mega-menu ')).slideToggle(500, function(){
				jQuery(this).parent().toggleClass('nav-active');
			});

			ev.stopPropagation();
		});

	}
			
	// > Hover Tab  function ========================== //
	function hover_tab(){
	jQuery('.circle-block-outer[data-toggle="tab-hover"] div').on('mouseenter', function(){
		jQuery(this).tab('show');
	});
	}

	/*--------------------------------------------------------------------------------------------
		document.ready ALL FUNCTION START
	---------------------------------------------------------------------------------------------*/
	jQuery(document).ready(function() {
		// > Top Search bar Show Hide function by = custom.js  		
		site_search(),
		// > Video responsive function by = custom.js 
		video_responsive(),
		
		// > Vertically center Bootstrap modal popup function by = custom.js
		popup_vertical_center();
		// > page scroll top on button click function by = custom.js	
		scroll_top(),
		// > input type file function by = custom.js	 	
		input_type_file_form(),
		// > input Placeholder in IE9 function by = custom.js		
		placeholderSupport(),
		// > accordion active calss function by = custom.js ========================= //			
		accordion_active(),
		// > Nav submenu on off function by = custome.js ===================//
		mobile_nav(),
		// > Hover Tab  function ========================== //
		hover_tab();

	}); 

	

	/*===========================
		Document on  Submit FUNCTION START
	===========================*/

	// > Contact form function by = custom.js	
	// jQuery(document).on('submit', 'form.cons-contact-form', function(e){
	// 	e.preventDefault();
	// 	var form = jQuery(this);
	// 	/* sending message */
	// 	jQuery.ajax({
	// 		url: 'http://thememajestic.com/react/modern/form-handler.php',
	// 		data: form.serialize() + "&action=contactform",
	// 		type: 'POST',
	// 		dataType: 'JSON',
	// 		success:function(data){
	// 			if(data['success']){
	// 			jQuery("<div class='alert alert-success'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');
	// 			}else{
	// 			jQuery("<div class='alert alert-danger'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');	
	// 			}
	// 		}
	// 	});
	// 	return false;
	// });	

	/*===========================
		Document on  Submit FUNCTION END
	===========================*/	

	//=== Switcher panal slide function	=====================//
	jQuery(document).ready(function () {

		jQuery('.nav-sidebar').animate({'right': '-500px'});
		jQuery('.vnav-btn').addClass('closed');
	
		jQuery('.vnav-btn').on('click', function () {	
			if (jQuery(this).hasClass('open')) {
				jQuery('.nav-sidebar').animate({'right': '-500px'});
			} 
			else {
				if (jQuery(this).hasClass('closed')) {
				jQuery('.nav-sidebar').animate({'right': '0'});
				}
			}
		});

		//============== Transparent Part ===========//	
	    jQuery('.nav-transparent-area').fadeOut(500);	
		jQuery('.vnav-btn').on('click', function () {	
			if (jQuery(this).hasClass('open')) {
				jQuery('.nav-transparent-area').animate({'left': '100%'});
			} 
			else {
				if (jQuery(this).hasClass('closed')) {
				jQuery('.nav-transparent-area').fadeIn(500);
				}
			}
		});
						
		jQuery('.nav-transparent-area').on('click', function () {	
				jQuery('.nav-sidebar').animate({'right': '-500px'});
				jQuery('.nav-transparent-area').fadeOut(500);
				jQuery('.vnav-btn').addClass('closed');
		});
			
		//==============close btn ===========//		
		jQuery('.vnav-close ').on('click', function () {	
				jQuery('.nav-sidebar').animate({'right': '-500px'});
				jQuery('.nav-transparent-area').fadeOut(500);
				jQuery('.vnav-btn').addClass('closed');
		}); 				
	});
	
	//=== Switcher panal slide function END	=====================//

})(window.jQuery);

// > masonry function function by = isotope.pkgd.min.js ========================= //	
function masonryBox() {
	if ( jQuery().isotope ) {      
		var $container = jQuery('.portfolio-wrap');
		var $grid = $container.isotope({
				itemSelector: '.masonry-item',
				transitionDuration: '1s',
				originLeft: true,
				stamp: '.stamp'
			});
			
		$grid.imagesLoaded().progress( function() {
				$grid.isotope('layout');
			});

		jQuery('.masonry-filter li').on('click',function() {                           
			var selector = jQuery(this).find("[data-filter]").first().attr('data-filter');
			jQuery('.masonry-filter li').removeClass('active');
			jQuery(this).addClass('active');
			$container.isotope({ filter: selector });
			return false;
		});
	}
}	
