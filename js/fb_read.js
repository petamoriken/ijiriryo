$(function() {
	"use strict";

	FB.init({
	    appId: "134461313428624",
		xfbml: true,
		version: 'v3.0'
	});

	FB.api("/182589125151751/feed",
		{ access_token: "134461313428624|oWdH-uX6Ms2-wdzYpyGc3sJ36cE", limit: 10 },
		function (response) {
			var contents = "<table>";
			var lines = [];
			var limit = 4, num = 0;

			for (var i = 0, l = response.data.length; i < l; ++i) {
				var datum = response.data[i];

				if(!datum.id.match(/^182589125151751/)) {
					continue;
				}

				var mes = datum.message && datum.message.split(/[\n\r]/)[0];
				if(mes !== null && mes.length > 15) {
					mes = mes.substring(0, 15);
					mes += "...";
				}

				lines.push("<tr><td>"+ getDateString(new Date(datum.created_time)) +"</td><td>"+ mes + "</td></tr>");

				++num;
				if(num >= limit) {
					break;
				}
			}

			contents += lines.join("") + "</table>";
			$("#fb_wall").html(contents);
		}
	);

	FB.api('/290389567732459/events',
		{ access_token: "134461313428624|oWdH-uX6Ms2-wdzYpyGc3sJ36cE", limit: 20 },
		function (response) {
			var contents = "<table>";
			var lines = [];
			var limit = 4, num = 0;

			var now = Date.now();
			for (var i = 0, l = response.data.length; i < l; ++i) {
				var datum = response.data[i];

				var name = datum.name;
				if(name !== null && name.length > 15){
					name = name.substring(0, 15);
					name += "...";
				}

				var time = new Date(datum.start_time);
				if(now > time.getTime()) {
					break;
				}
				lines[lines.length] = "<tr><td>"+ getDateString(time) + "</td><td>" + name + "</td></tr>";
			}

			if(lines.length == 0) {
				contents += "<tr><td>No Event</td></tr>";
			} else {
				contents += lines.slice(0, num).join("");
			}

			contents += "</table>";
			$("#fb_events").html(contents);
		}
	);

	/**
	 * @param {Date} date
	 * @example getDateString(new Date("2016-09-25T12:00:00+0900")) // "16. 09. 25"
	 */
	function getDateString(date) {
		var year = date.getFullYear().toFixed().substr(-2);
		var month = ("0" + (date.getMonth() + 1)).substr(-2);
		var date = ("0" + date.getDate()).substr(-2);
		return year + ". " + month + ". " + date;
	}
});
