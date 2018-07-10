$(function() {
	"use strict";

	var $mainImg = $("#main > img");
	var $maskImg = $("#mask > img");
	var $nav = $("nav");

	$(window).scroll(function() {
		if($(window).scrollTop() >= $mainImg.height() + Number($mainImg.css("marginTop").replace("px", "")) +5 ){
			$nav.css({
				position: "fixed",
				top: "0"
			});
			$maskImg.css({
				display: "inline",
				position: "fixed"
			});
			$mainImg.css({
				marginBottom : ($nav.height() + 15)+ "px"
			});
		}else{
			$nav.css({
				position : "relative"
			});
			$maskImg.css({
				display: "none",
				position: "absolute"
			});
			$mainImg.css({
				marginBottom: "5px"
			});
		}
	});
});
