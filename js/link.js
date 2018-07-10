$(function() {
	"use strict";

	var $scrolling = $("html, body");

	var $main = $("main");
	var $header = $("header");
	var $footer = $("footer");

	$(".page").on("click", function(e) {
		var uri = $(this).attr("href");
		var wlh = window.location.href;
		var file = wlh.substring(wlh.lastIndexOf("/") + 1, wlh.length);
		var urislice = uri.lastIndexOf("/") !== -1 ? uri.substring(uri.lastIndexOf("/") + 1, wlh.length) : uri;
		file = file.indexOf("#") !== -1 ? file.substring(0, file.indexOf("#")) : file;
		urislice = urislice.indexOf("#") !== -1 ? urislice.substring(0, urislice.indexOf("#")) : urislice;

		//ページの移動がないとき
		if (file == urislice || (file == "" && urislice == "index.html") || (file == "index.html" && urislice == "")) {
			var os = uri.indexOf('#') !== -1 ? uri.slice(uri.indexOf('#'), uri.length) : null;
			var time = Math.sqrt( Math.abs( ( os !== null ? $(os).offset().top : 0 ) -$(window).scrollTop() ) ) * 15;

			if (os !== null && os !== "") {	//#の指定があるとき
				$scrolling.animate( { scrollTop: $(os).offset().top }, time, "jswing" );
			} else {
				$scrolling.animate( { scrollTop: 0 }, time, "jswing" );
			}

		} else {
			$main.animate({ opacity : "0" }, 300, "easeOutQuart");
			$header.delay(150).animate({ top: "-116px" }, 180, "easeOutQuart", function() {
				window.location.href = uri;
				setTimeout(function() {
					$header.css("top", "0");
					$footer.css("top", "608px");
					$main.css("opacity", "1");
				}, 500);
			});
			$footer.delay(150).animate({ top: $(document).height() }, 180, "easeOutQuart");
		}
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
	});
});
