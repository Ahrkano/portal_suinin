/*
 * Author: DungeonMaster
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";

	// here all ready functions

	magic_tm_responsive();
	magic_tm_imgtosvg();
	magic_tm_magnific_popup();
	magic_tm_jarallax();
	magic_tm_list_height();
	magic_tm_portfolio();
	magic_tm_anchor();
	magic_tm_contact_form();
	magic_tm_owl_carousel();
	magic_tm_animate_text();
	magic_tm_projects();
	magic_tm_miniboxes();
	magic_tm_isotope();
	magic_tm_totop();
	magic_tm_totop_myhide();
	magic_tm_animate_text();
	magic_tm_popup_blog();
	magic_tm_popupscroll();
	magic_tm_about_animation();
	magic_tm_kenburn_slider();
	magic_tm_ripple();
	magic_tm_switcher();
	magic_tm_data_images();
	magic_tm_hamburger();


	jQuery(window).on('scroll',function(){
		//e.preventDefault();
		magic_tm_totop_myhide();

	});

	jQuery(window).on('resize',function(){
		magic_tm_miniboxes();
		magic_tm_isotope();
		magic_tm_responsive();

	});

	jQuery(window).load('body', function(){
		setTimeout(function(){
        jQuery('.magic_tm_preloader').addClass('loaded');
    }, 1000);
	});

});

// -----------------------------------------------------
// --------------------  FUNCTIONS  --------------------
// -----------------------------------------------------

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function magic_tm_imgtosvg(){

	"use strict";

	jQuery('img.svg').each(function(){

		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------    RESPONSIVE    ---------------------
// -----------------------------------------------------

function magic_tm_responsive(){

	"use strict";

	var leftpart			= jQuery('.magic_tm_leftpart_wrap');
	var rightpart			= jQuery('.magic_tm_rightpart');
	var WW					= jQuery(window).width();

	if(WW<1040){
		leftpart.addClass('hide');
		rightpart.addClass('full');
	}else{
		leftpart.removeClass('hide');
		rightpart.removeClass('full');
	}
}

// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------

function magic_tm_magnific_popup(){

	"use strict";

	jQuery('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

	jQuery('.gallery').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			}
		});
	});
	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			//type: 'iframe',
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function magic_tm_jarallax(){

	"use strict";

	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');

		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}

		element.jarallax({
			speed: customSpeed,
			automaticResize: true
		});
	});
}

// -------------------------------------------------
// ---------    PERSONAL LIST HEIGHT    ------------
// -------------------------------------------------

function magic_tm_list_height(){

	"use strict";

	var div			= jQuery('.about_short_contact_wrap');
	var list		= div.find('li:nth-of-type(2n)');

	list.after("<div class='clearfix'></div>");
}


// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable

function magic_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.magic_tm_portfolio_list');
		var filter		 = jQuery('.magic_tm_portfolio_filter');

		if(filter.length){
			// Isotope Filter
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});
		}
	}
}

function magic_tm_projects() {

	"use strict";

	jQuery('.magic_tm_portfolio_animation_wrap').each(function() {
		jQuery(this).on('mouseenter', function() {
			if (jQuery(this).data('title')) {
				jQuery('.magic_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.magic_tm_portfolio_titles').addClass('visible');
			}

			jQuery(document).on('mousemove', function(e) {
				jQuery('.magic_tm_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			jQuery('.magic_tm_portfolio_titles').removeClass('visible');
		});
	});
}


// -----------------------------------------------------
// ------------    ANCHOR NAVIGATION    ----------------
// -----------------------------------------------------

function magic_tm_anchor(){

	"use strict";

	jQuery('.anchor_nav').onePageNav();

	var scrollOffset = 0;

	jQuery(".anchor a").on('click', function(evn){
		evn.preventDefault();
		jQuery('html,body').scrollTo(this.hash, this.hash, {
			gap: { y: -scrollOffset-85 },
			animation:{
				duration: 1500,
				easing: "easeInOutExpo"
			}
		});
		return false;
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function magic_tm_contact_form(){

	"use strict";

	jQuery(".contact_form #send_message").on('click', function(){

		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');

		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields
		if(name===''||email===''||message===''){

			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {

				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph


				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}

				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}

			});
		}
		return false;
	});
}

// -----------------------------------------------------
// --------------------    OWL CAROUSEL    -------------
// -----------------------------------------------------

function magic_tm_owl_carousel(){

	"use strict";

	var carousel			= jQuery('.magic_tm_services_wrap .owl-carousel');
  	carousel.owlCarousel({
			loop: true,
			items: 3,
			lazyLoad: true,
			margin: 30,
			autoplay: true,
			autoplayTimeout: 6000,
			smartSpeed: 2000,
			dots: true,
			nav: true,
			navSpeed: true,
			responsive:{
			0:{items:1},
			480:{items:2},
			768:{items:3},
			1040:{items:3},
			1200:{items:3},
			1600:{items:3},
			1920:{items:3}
		}
	});

	jQuery('.magic_tm_services_wrap .custom_nav > a.prev').on('click', function(){
		carousel.trigger('prev.owl.carousel');
		return false;
	});

	jQuery('.magic_tm_services_wrap .custom_nav > a.next').on('click', function(){
		carousel.trigger('next.owl.carousel');
		return false;
	});
	magic_tm_imgtosvg();

	var carusel2			= jQuery('.magic_tm_testimonial_wrap .owl-carousel');
  	carusel2.owlCarousel({
		loop:true,
		autoplay:true,
		autoWidth: false,
		nav: true,
		items:1,
	});
	
}


// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -----------------------------------------------------
// -----------------    PROGRESS BAR    ----------------
// -----------------------------------------------------

function tdProgress(container){

	"use strict";

	container.find('.magic_tm_progress').each(function(i) {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.magic_tm_bar_wrap');
		var pBar 			= progress.find('.magic_tm_bar');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');},(i*500));
	});
}
jQuery('.magic_tm_progress_wrap').each(function() {
	"use strict";
	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});
});

// -----------------------------------------------------
// -----------------    MINI BOXES    ------------------
// -----------------------------------------------------

 function magic_tm_miniboxes(){

  "use strict";

  var el 			= jQuery('.magic_tm_miniboxes');

  if(el.length){
   el.each(function(index, element) {

    var child		= jQuery(element).find('.magic_tm_minibox');

    child.css({height:'auto'});
    // Get an array of all element heights

    var W 		= jQuery(window).width();
    if(W > 480){
     var elementHeights = child.map(function() {return jQuery(this).outerHeight();}).get();

     // Math.max takes a variable number of arguments
     // `apply` is equivalent to passing each height as an argument
     var maxHeight 		= Math.max.apply(null, elementHeights);

     // Set each height to the max height
     child.css({height:maxHeight+'px'});
    }
   });
  }
 }

// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function magic_tm_isotope(){

	"use strict";

	jQuery('.masonry').isotope({
		itemSelector: '.masonry_item',
		masonry: {

		}
	});
}

// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------

function magic_tm_totop(){

	"use strict";

	jQuery(".magic_tm_totop").on('click', function(e) {
		e.preventDefault();
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}

function magic_tm_totop_myhide(){

	"use strict";

	var toTop		=jQuery(".magic_tm_totop");
	if(toTop.length){
		var topOffSet 	=toTop.offset().top;

		if(topOffSet > 1000){
			toTop.addClass('opened');
		}else{
			toTop.removeClass('opened');
		}
	}
}
// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

function magic_tm_animate_text(){

	"use strict";

	var animateSpan			= jQuery('.magic_tm_animation_text_word');

		animateSpan.typed({
			strings: ["Tecnologia", "Informação", "Segurança", "Planejamento", "Suporte"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
}

// -----------------------------------------------------
// -------------------    POPUP BLOG    ----------------
// -----------------------------------------------------

function magic_tm_popup_blog(){
	"use strict";
	var li				= jQuery('.magic_tm_list_wrap.blog_list .inner_list');
	var popupBox		= jQuery('#magic_tm_popup_blog');
	var popupInner		= popupBox.find('.inner_popup');
	var closePopup		= popupBox.find('.close');

	li.each(function(){
		var element		= jQuery(this);
		var button		= element.find('.read_more a,.title_holder a,.link_news');
		var html		= element.html();
		var mainImage	= element.find('.news_image');
		var imgData		= mainImage.data('url');
		var title		= element.find('.title_holder h3');
		var titleHref	= element.find('.title_holder h3 a').html();

		mainImage.css({backgroundImage: 'url('+imgData+')'});
		button.on('click',function(){
			popupBox.addClass('opened');
			popupInner.html(html);
			mainImage = popupInner.find('.news_image');
			mainImage.css({backgroundImage: 'url('+imgData+')'});
			title = popupInner.find('.title_holder h3');
			title.html(titleHref);
			return false;
		});
	});
	closePopup.on('click',function(){
		popupBox.removeClass('opened');
		popupInner.html('');
		return false;
	});
}

// -----------------------------------------------------
// -------------    WIDGET MENU SCROLL -----------------
// -----------------------------------------------------

function magic_tm_popupscroll(){

	"use strict";

	var H				= jQuery(window).height();
	var scrollable		= jQuery('.scrollable');

	var popupBox		= jQuery('.magic_tm_popup_blog .inner_popup');

	popupBox.css({height:H-100});

	scrollable.each(function(){
		var element		= jQuery(this);
		var wH			= jQuery(window).height();

		element.css({height: wH-100});

		element.niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #fff"
		});
	});
}

// -------------------------------------------------
// -------------  SLIDER KENBURN  ------------------
// -------------------------------------------------

function magic_tm_kenburn_slider(){

	"use strict";

		jQuery(function() {
			jQuery('.magic_tm_hero_header_wrap .overlay_slider').vegas({
			timer:false,
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:7000,

			slides: [
				{ src: 'img/hero/1.jpg' },
				{ src: 'img/hero/2.jpg' },
				{ src: 'img/hero/3.jpg' },
			]

		});
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function magic_tm_ripple(){

	"use strict";

	jQuery('#ripple').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
	jQuery('#ripple_testimonial').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
}


// -----------------------------------------------------
// -----------------    SWITCHER    --------------------
// -----------------------------------------------------

function magic_tm_switcher(){

	"use strict";

	var switcherOpener		= jQuery('.magic_tm_resize');
	var switcherIcon			= jQuery('.magic_tm_leftpart_wrap .magic_tm_resize i');
	var leftPart					= jQuery('.magic_tm_leftpart_wrap');
	var rightPart					= jQuery('.magic_tm_rightpart');

	switcherOpener.on('click',function(){
		if(switcherOpener.hasClass('opened')){
			switcherOpener.removeClass('opened');
			switcherIcon.removeClass('opened');
			leftPart.removeClass('opened');
			rightPart.removeClass('opened');
		}else{
			switcherOpener.addClass('opened');
			switcherIcon.addClass('opened');
			leftPart.addClass('opened');
			rightPart.addClass('opened');
		}
		setTimeout(function(){jQuery('#ripple').ripples('updateSize');},101);
		setTimeout(function(){jQuery('#ripple').ripples('updateSize');},201);
		setTimeout(function(){jQuery('#ripple').ripples('updateSize');},301);

		if(jQuery('.jarallax').length){
			jQuery('.jarallax').jarallax('destroy');
			setTimeout(function(){magic_tm_jarallax();},300);

		}
		return false;

	});


}

// -----------------------------------------------------
// -------------------    COUNTER    -------------------
// -----------------------------------------------------

jQuery('.magic_tm_counter').each(function() {

	"use strict";

	var el		= jQuery(this);
	el.waypoint({
		handler: function(){

			if(!el.hasClass('stop')){
				el.addClass('stop').countTo({
					refreshInterval: 50,
					formatter: function (value, options) {
						return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
					},
				});
			}
		},offset:'80%'
	});
});

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function magic_tm_data_images(){

	"use strict";

	var data			= jQuery('*[data-img-url]');

	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

	function magic_tm_about_animation(){

		"use strict";

		if ($('.parallax').length > 0) {
		  var scene = $('.parallax').get(0);
		  var parallax = new Parallax(scene, {
			relativeInput: true,
			onReady: function() { console.log('ready!');
		  } });
		}
	}

// -----------------------------------------------------
// ---------------  HAMBURGER  -------------------------
// -----------------------------------------------------

function magic_tm_hamburger(){

	"use strict";

	var hamburger 		= jQuery('.hamburger');
	var mobileMenu		= jQuery('.magic_tm_mobile_menu_wrap');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
}
