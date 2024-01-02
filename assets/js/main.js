/*
	Alpha by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner'),
		$main = $('#main'),
		$footer = $('#footer'),
		$cta = $('#cta'),
		$stickyArrows = $('#sticky-component'),
		$tooltip = $('.tooltip'),
		$tooltiptext = $('.tooltiptext');

	// Breakpoints.
		breakpoints({
			wide:      ( '1281px',  '1680px' ),
			normal:    ( '981px',   '1280px' ),
			narrow:    ( '737px',   '980px'  ),
			narrower:  ( '737px',   '840px'  ),
			mobile:    ( '481px',   '736px'  ),
			mobilep:   ( null,      '480px'  )
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right'
		});

	// NavPanel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	// Header.
		if (!browser.mobile) {
			$window.on('load', function() {					
					// Sticky Double Angle down arrows
					$footer.scrollex({
					terminate:		function() { $stickyArrows.removeClass('visibility'); },
					enter:		function() { $stickyArrows.css("visibility", "hidden"); },
					leave:		function() { $stickyArrows.css("visibility", "visible"); }
				})

			});
		}

	// Tooltip
		$window.on('load', function() {
			$tooltip.on('mouseenter', function(event) {
				console.log('mouseenter handler running')
				$tooltiptext.css({
					"visibility": "visible",
					"left" : event.clientX,
					"top" : event.clientY,
				});
			});
			
			$tooltip.on('mouseleave', function() {
				console.log('mouseleave handler running')
				$tooltiptext.css({
					"visibility": "hidden",
				});
			});
		});

})(jQuery);