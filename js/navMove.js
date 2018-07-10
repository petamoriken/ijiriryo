$(window).scroll(function () {
	if($(window).scrollTop() >= $("#main>img").height() + Number($("#main>img").css("marginTop").replace("px", "")) +5 ){
		$("nav").css({
			"position" : "fixed",
			"top" : "0"
		});
		$("#mask>img").css({
			"display" : "inline",
			"position" : "fixed"
		});
		$("#main>img").css({
			"marginBottom" : ($("nav").height() +10 +5)+ "px"
		});
	}else{
		$("nav").css({
			"position" : "relative"
		});
		$("#mask>img").css({
			"display" : "none",
			"position" : "absolute"
		});
		$("#main>img").css({
			"marginBottom" : "5px"
		});
	}
});