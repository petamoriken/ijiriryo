$(window).ready(function(){
	if($(window).height() -$("footer").offset().top <= 250){
		$("footer").css({
    		"position" : "absolute",
    		"height" : "250px"
   		});
	}
});
$(window).resize(function(){
	if($(window).height() -$("footer").offset().top <= 250){
		$("footer").css({
			"position" : "absolute",
			"height" : "250px"
		});
	}else{
		$("footer").css({
			"position" : "fixed",
			"height" : "100%"	
		});
    }
});