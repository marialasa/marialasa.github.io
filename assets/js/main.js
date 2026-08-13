/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

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
		$('#site-nav a, .scrolly').scrolly({
			speed: 1000
		});

	// Scroll-spy: resalta la sección activa en el menú lateral.
		var sections = document.querySelectorAll('main.content > section[id]'),
			navLinks = document.querySelectorAll('#site-nav a'),
			linkById = {};

		navLinks.forEach(function(a) {
			var href = a.getAttribute('href');
			if (href && href.charAt(0) === '#')
				linkById[href.slice(1)] = a;
		});

		if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
			var observer = new IntersectionObserver(function(entries) {
				entries.forEach(function(entry) {
					var link = linkById[entry.target.id];

					if (!link || !entry.isIntersecting)
						return;

					navLinks.forEach(function(a) { a.classList.remove('is-active'); });
					link.classList.add('is-active');
				});
			}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

			sections.forEach(function(section) { observer.observe(section); });
		}

	// Switch de idioma en "About".
		var langSwitch = document.querySelector('.lang-switch');

		if (langSwitch) {
			langSwitch.addEventListener('click', function() {
				var esBlock = document.querySelector('.lang-es'),
					enBlock = document.querySelector('.lang-en'),
					current = langSwitch.getAttribute('data-lang'),
					next = current === 'es' ? 'en' : 'es';

				esBlock.hidden = next !== 'es';
				enBlock.hidden = next !== 'en';
				langSwitch.setAttribute('data-lang', next);
			});
		}

})(jQuery);
