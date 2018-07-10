$(function() {
	"use strict";

	var mobile = (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);

	// scroll parallax
	if (!mobile) {
		$(".text").css("opacity", 0);
		$(window).on("scroll", function() {
			$("section").each(function() {
				var dy = $(this).offset().top - $(window).scrollTop();
				var w = 200;
				if(dy > 0 && dy <= w){
					var op = (w-dy) / w;
					op = Math.pow(2, op) -1.0;
					$(this).children(".text").css("opacity", op);
				}else if(dy > w){
					$(this).children(".text").css("opacity", 0);
				}else{
					$(this).children(".text").css("opacity", 1);
				}
			});
		});
	}
});
