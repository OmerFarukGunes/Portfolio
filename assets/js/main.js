jQuery(document).ready(function($) {
	'use strict';
        $('.owl-carousel').owlCarousel({
            items:4,
            lazyLoad:true,
            dots:true,
            responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                    },
                    650:{
                        items:2,
                    },
                    900:{
                        items:3,
                    },
                    1200:{
                        items:4,
                    }
                }
        });
        $(function() {
            $( "#tabs" ).tabs();
        });
        $(".seq-preloader").fadeOut(); 
        $(".sequence").delay(500).fadeOut("slow"); 
        $(function() {
        function showSlide(n) {
            $body.unbind("mousewheel");
            currSlide = Math.min(Math.max(0, currSlide + n), $slide.length-1);      
            var displacment = window.innerWidth*currSlide;          
            $slides.css('transform', 'translateX(-' + displacment + 'px)');
            setTimeout(bind, 700);
            $('nav a.active').removeClass('active');
            $($('a')[currSlide]).addClass('active');  
        }
        function bind() {
             $body.bind('false', mouseEvent);
          }
        $('nav a, .main-btn a').click(function(e) {
            var newslide = parseInt($(this).attr('href')[1]);
            var diff = newslide - currSlide - 1;
            showSlide(diff);
            e.preventDefault();
        });
         $(window).resize(function(){
           var displacment = window.innerWidth*currSlide;
           $slides.css('transform', 'translateX(-'+displacment+'px)');
         });
        var $body = $('body');
        var currSlide = 0;
        var $slides = $('.slides');
        var $slide = $('.slide');
        $($('nav a')[0]).addClass('active');
        $body.bind('false', mouseEvent);
    })        
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("active");
            }
        });
		$window.on('unload pagehide', function() {
			window.setTimeout(function() {
				$('.is-transitioning').removeClass('is-transitioning');
			}, 250);
		});
		if (browser.name == 'ie' || browser.name == 'edge')
			$body.addClass('is-ie');
		$('.scrolly').scrolly({
			offset: function() {
				return $header.height() - 2;
			}
		});
    });
