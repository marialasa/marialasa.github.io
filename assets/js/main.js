/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

	// Book menu.
		var $bookMenu = $nav.find('.book-menu'),
			$bookToggle = $bookMenu.find('.book-toggle');

		if ($bookMenu.length && $bookToggle.length) {
			var closeBookMenu = function() {
				$bookMenu.removeClass('is-open');
				$nav.removeClass('book-menu-open');
				$bookToggle.attr('aria-expanded', 'false');
			};

			$bookToggle.on('click', function(event) {
				event.preventDefault();
				event.stopPropagation();

				var open = !$bookMenu.hasClass('is-open');

				$bookMenu.toggleClass('is-open', open);
				$nav.toggleClass('book-menu-open', open);
				$bookToggle.attr('aria-expanded', open ? 'true' : 'false');
			});

			$bookMenu.find('.book-submenu a').on('click', closeBookMenu);

			$(document).on('click', function(event) {
				if (!$bookMenu.is(event.target) && $bookMenu.has(event.target).length === 0)
					closeBookMenu();
			});

			$window.on('keydown', function(event) {
				if (event.key === 'Escape')
					closeBookMenu();
			});
		}

})(jQuery);
