$(function() {
	$("#fp>div").not("#fp_laundry-a,#fp_laundry-b,#fp_laundry-c").each(function() {
	
		var target = $("#"+$(this).attr("id")+"_2");
		$(this).on("mouseover", function() {
			target.stop().animate({
				"opacity" : "1"
			}, 100);
		});
		$(this).on("mouseout", function() {
			target.stop().animate({
				"opacity" : "0"
			}, 80);
		});
		
	});
	
		$("#fp_laundry-a,#fp_laundry-b,#fp_laundry-c").each(function() {
	
		var target = $("#fp_laundry-a_2,#fp_laundry-b_2,#fp_laundry-c_2");
		$(this).on("mouseover", function() {
			target.stop().animate({
				"opacity" : "1"
			}, 100);
		});
		$(this).on("mouseout", function() {
			target.stop().animate({
				"opacity" : "0"
			}, 80);
		});

	});
});