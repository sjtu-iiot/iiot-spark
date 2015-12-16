/* ====================================================================== */
/*	Animated header
/* ====================================================================== */

$(function(){
 var shrinkHeader = 150;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.navbar-fixed-top').addClass('shrink');
        }
        else {
            $('.navbar-fixed-top').removeClass('shrink');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});

/* ====================================================================== */
/*	Contact Form
/* ====================================================================== */

$(document).ready(function() {
	$('#contact-form').simpleContactForm({
	subject: 'New message from your website',
	errorClass: 'error',
	success: function(){
		$('#success').html("<p><strong>Message sent!</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit quisque sit amet nisl nec diam.</p>");
			$('#success')
				.fadeIn(500)
				.delay(2000)
				.fadeOut(500);
	}
 });
});

/* ====================================================================== */
/*	Flexslider
/* ====================================================================== */

$(window).load(function() {
		$('.flexslider').flexslider({
			directionNav: false,
			slideshow: false
		});
});

$(window).load(function() {
		$('.team').flexslider({
			directionNav: false,
			prevText: "",
			nextText: "",
			manualControls: ".team .flex-control-nav li",
			slideshow: false
		});
});

$(window).load(function() {
		$('.quotes').flexslider({
			directionNav: true,
			prevText: "",
			nextText: "",
			slideshow: true
		});
});

$(window).load(function() {
		$('.portfolio-slides').flexslider({
			controlNav: true,
			directionNav: false,
			slideshow: true
		});
});

/* ====================================================================== */
/*	Magnific-Popup
/* ====================================================================== */

$(document).ready(function() {	  
  $('.popup-with-zoom-anim').magnificPopup({
	  type: 'inline',
	  
	  fixedContentPos: false,
	  fixedBgPos: true,

	  overflowY: 'auto',

	  closeBtnInside: true,
	  preloader: false,
	  
	  midClick: true,
	  removalDelay: 300,
	  mainClass: 'my-mfp-zoom-in',
	  focus: '#search'
  });
	
});

/* ====================================================================== */
/*	Interesting Facts
/* ====================================================================== */

jQuery(function ($) {
  // custom formatting example
  $('.timer').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });

  // start all the timers
  $('#stats').waypoint(function() {
	$('.timer').each(count); },
	{
	offset: 245,
	triggerOnce: true
	});

  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
  
});

/* ====================================================================== */
/*	Waypoints
/* ====================================================================== */
(jQuery)(function($) {
if ($(".animated")[0]) {
            jQuery('.animated').css('opacity', '0');
        }

        $('.triggerAnimation').waypoint(function() {
            var animation = $(this).attr('data-animate');
            $(this).css('opacity', '');
            $(this).addClass("animated " + animation);

        },
                {
                    offset: '80%',
                    triggerOnce: true
                }
        );

});

/* ====================================================================== */
/*	bxslider
/* ====================================================================== */

$(document).ready(function(){
  $('.bxslider').bxSlider({
    slideWidth: 180,
    minSlides: 2,
    maxSlides: 6,
    slideMargin: 0,
	pager: false,
	controls: false,
	auto: true,
	easing: 'ease-in'
  });
});

/* ====================================================================== */
/*	Portfolio expander
/* ====================================================================== */

$(document).ready(function(){  
        $('.grid').colio({  
            id: 'window',
			scrollOffset: 90,
			placement: 'before',
			onContent: function(content){
				// init "flexslider" plugin
				$('.portfolio-slider', content).flexslider({directionNav: false, animationSpeed: 300});
			}
        });  
    }); 
	
	
/* ====================================================================== */
/*	Scrolling
/* ====================================================================== */
	var height,
		pos,
		id_slide;

	$(document).scroll(function(){
		pos = $(this).scrollTop();
		$(".menu_target").each(function() {
			id_slide = $(this).attr("id");
			height = $(this).css("height");
			if($(this).offset().top <= pos + 100) {
				$(".nav li").removeAttr("id");
				$(".nav li").find("a[href^='#"+id_slide+"']").parent().attr("id","current_menu_item");	
			}
		});
	});
	
		$(document).ready(function()
		{
			// Scroll the whole document
			$('.nav, .intro').localScroll({
			   target:'body',
			   offset: -67
			});

		});



