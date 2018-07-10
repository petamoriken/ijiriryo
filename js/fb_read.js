$(window).ready(function(){

	FB.init({
	    appId  : '134461313428624',
	    status : true,
	    cookie : true,
	    xfbml  : true
	});

	FB.api('/182589125151751/feed'
		,{ access_token: "134461313428624|oWdH-uX6Ms2-wdzYpyGc3sJ36cE", limit: 30 }
		,function(response) {
			var contents = "<table>";
			var line = [];
			var limit = 4;
			var num = 0;
			var pastName = "";
				for (var i = 0; i < response.data.length; i++) {
					var mes, time, name, type, id;
					
					id = response.data[i]['from']['id'];
					if(id != "182589125151751")	continue;
					
					type = response.data[i]['type'];
					
					mes = response.data[i]['message'] != null ? response.data[i]['message'].split(/[\n\r]/)[0] : null;
					if(mes != null && mes.length > 15){
						mes = mes.substring(0, 15);	
						mes += "...";
					}
						
					time = response.data[i]['updated_time'];
					time = time.substring(2, 10).replace(/-/g, ".");
					
					name =  response.data[i]['name'];
					if(name != null && name.length > 15){
						name = name.substring(0, 15);	
						name += "...";
					}
						
				if(mes != null && mes != "" && pastName != name && pastName != mes){
					if(name != null && name != "" && type != "link"){
						line[line.length] = "<tr><td>"+ time.substring(0,3) + " " + time.substring(3,6) + " " + time.substring(6,9) +"</td><td>"+ name + "</td></tr>";
						pastName = name;
					}else{
						line[line.length] = "<tr><td>"+ time.substring(0,3) + " " + time.substring(3,6) + " " + time.substring(6,9) +"</td><td>"+ mes + "</td></tr>";
						pastName = mes;
					}
					num += 1;
					if(num >= limit)	break;
				}
			}
			for(var i=0; i<line.length; i++){
				contents += line[i];
			}
			contents += "</table>";
			$("#fb_wall").html(contents);
	});
	
	var now = new Date();
	var check = "";
	var y, m, d;
	y = now.getFullYear() +"";
	y = y.substring(2, 4);
	m = now.getMonth() +1;
	m = (m<10) ? "0"+m : ""+m;
	d = now.getDate();
	d = (d<10) ? "0"+d : ""+d;
	check = y+m+d;
	
	FB.api('/182589125151751/events'
		,{	access_token: "134461313428624|oWdH-uX6Ms2-wdzYpyGc3sJ36cE", limit: 20 }
		,function(response) {
			var contents = "<table>";
			var line = [];
			var limit = 4, num = 0;
			for (var i = 0; i < response.data.length; i++) {
				var time, name;
				
				name =  response.data[i]['name'];
				if(name != null && name.length > 15){
					name = name.substring(0, 15);	
					name += "...";
				}
				
				time = response.data[i]['start_time'];
				time = time.substring(2, 10).replace(/-/g, ".");
				if( Number(check) > Number( time.replace(".", "").replace(".", "") ) )	break;
				line[line.length] = "<tr><td>"+ time.substring(0,3) + " " + time.substring(3,6) + " " + time.substring(6,9) +"</td><td>"+ name + "</td></tr>";	
			}
			if(line.length == 0)	contents += "<tr><td>No Event</td></tr>";
			else{
				for(var i=line.length-1; i>=0; i--){
				contents += line[i];
				num += 1;
				if(num >= limit)	break;
				}
			}
			contents += "</table>";
			$("#fb_events").html(contents);
	});

});
