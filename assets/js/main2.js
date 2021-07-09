(function($) {
	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');
		breakpoints({
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});
	/**
	 * 
	 * @return {jQuery} jQuery object.
	 */
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});
		if (browser.name == 'ie' || browser.name == 'edge')
			$body.addClass('is-ie');
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {
			$window.on('resize', function() {
				$window.trigger('scroll');
			});
			$window.on('load', function() {
				$banner.scrollex({
					bottom:		$header.height() + 10,
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
				});
				window.setTimeout(function() {
					$window.triggerHandler('scroll');
				}, 100);
			});
		}
})(jQuery);