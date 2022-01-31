$(document).ready(function () {
	// images in the pool
	var images = ["url(\"assets/css/images/overlay.png\"), url(\"images/intro.jpg\")", "url(\"assets/css/images/overlay.png\"), url(\"images/intro2.jpg\")", "url(\"assets/css/images/overlay.png\"), url(\"images/intro3.jpg\")", "url(\"assets/css/images/overlay.png\"), url(\"images/intro4.jpg\")"];

	// next image to display
	var next = 0;

	// interval beetween images
	var INTERVAL = 4000;

	// main function
	var doCarrousel = function () {
		$("#intro").fadeOut(400,function () {
			$(this).css("background-image", images[next]).fadeIn(400,
				function () {
					next=next+1
					setTimeout(doCarrousel, INTERVAL);
				});
		});

		if (next >= images.length)
			next = 0;
	};

	//start carrousel
	doCarrousel();
});

(function () {
	const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	//I'm adding this section so I don't have to keep updating this pen every year :-)
	//remove this if you don't need it
	let today = new Date(),
		dd = String(today.getDate()).padStart(2, "0"),
		mm = String(today.getMonth() + 1).padStart(2, "0"),
		yyyy = today.getFullYear(),
		nextYear = yyyy + 1,
		dayMonth = "07/02/",
		birthday = dayMonth + yyyy;

	today = mm + "/" + dd + "/" + yyyy;
	if (today > birthday) {
		birthday = dayMonth + nextYear;
	}
	//end

	const countDown = new Date(birthday).getTime(),
		x = setInterval(function () {

			const now = new Date().getTime(),
				distance = countDown - now;

			document.getElementById("days").innerText = Math.floor(distance / (day)),
				document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
				document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
				document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

			//do something later when date is reached
			if (distance < 0) {
				document.getElementById("headline").innerText = "It's my birthday!";
				document.getElementById("countdown").style.display = "none";
				document.getElementById("content").style.display = "block";
				clearInterval(x);
			}
			//seconds
		}, 0)
}());


/*
	Big Picture by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$all = $body.add($header);

	// Breakpoints.
		breakpoints({
			xxlarge: [ '1681px',  '1920px' ],
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '1001px',  '1280px' ],
			medium:  [ '737px',   '1000px' ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');
		else {

			breakpoints.on('<=small', function() {
				$body.addClass('is-touch');
			});

			breakpoints.on('>small', function() {
				$body.removeClass('is-touch');
			});

		}

	// Fix: IE flexbox fix.
		if (browser.name == 'ie') {

			var $main = $('.main.fullscreen'),
				IEResizeTimeout;

			$window
				.on('resize.ie-flexbox-fix', function() {

					clearTimeout(IEResizeTimeout);

					IEResizeTimeout = setTimeout(function() {

						var wh = $window.height();

						$main.each(function() {

							var $this = $(this);

							$this.css('height', '');

							if ($this.height() <= wh)
								$this.css('height', (wh - 50) + 'px');

						});

					});

				})
				.triggerHandler('resize.ie-flexbox-fix');

		}

	// Section transitions.

	// Events.
		var resizeTimeout, resizeScrollTimeout;

		$window
			.on('resize', function() {

				// Disable animations/transitions.
					$body.addClass('is-resizing');

				clearTimeout(resizeTimeout);

				resizeTimeout = setTimeout(function() {

					

					// Re-enable animations/transitions.
						setTimeout(function() {
							$body.removeClass('is-resizing');
							$window.trigger('scroll');
						}, 0);

				}, 100);

			})
			.on('load', function() {
				$window.trigger('resize');
			});

})(jQuery);