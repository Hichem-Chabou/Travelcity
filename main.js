$(document).ready(function() {
			$('.button-collapse').sideNav();
			$('.slider').slider({
				indicators: false,
				height: 500,
				transition: 500,
				interval: 6000
			});

			$('.autocomplete').autocomplete({
				data: {
					"Aruba": null,
					"Bahamas": null,
					"Bora Bora": null,
					"Hawai": null,
					"The Bahamas": null
				}
			});

			$('.scrollspy').scrollSpy()
		});