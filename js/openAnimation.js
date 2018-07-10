$(window).ready(function(){
	var hHeight = $("header").height();
	$("header").css("top", "-"+hHeight+"px");
	$("footer").css("display", "none").css("top", $(document).height());
	$("#main").css("opacity", 0);
	$("html,body").animate({"scrollTop": 0}, 1);
	$("#loading").css("display","inline");
});
$(window).load(function(){
	$("header").delay(100).animate({"top" : "0"}, 180, "easeOutQuart");
	$("footer").css("display", "block").delay(100).animate({"top" : "603px"}, 180, "easeOutQuart");
	$("#main").delay(250).animate({"opacity" : "1"}, 400, "easeOutQuart");
	$("#loading").animate({"opacity":"0"}, 100, function(){
		$("#loading").css("display","none");
	});
	
	var wlh = window.location.href;
	var os = wlh.indexOf('#')!=-1 ? wlh.slice(wlh.indexOf('#'), wlh.length) : null;
	if(os != null && os != ""){
		var time = Math.sqrt( Math.abs( $(os).offset().top -$(window).scrollTop() ) ) * 15;
		$("html,body").delay(380).animate( { scrollTop: $(os).offset().top }, time ,"jswing" );
	}
});