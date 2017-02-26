var interval = setInterval(function() {
	if(document.getElementById("myImg").alt == "立即购买") {
		alert("OK");
		clearInterval(interval);
	}
},5000);

var interval = setInterval(function() {
	if(document.getElementById("sss").text == "立即购买") {
		alert("OK");
		clearInterval(interval);
	}
},5000);

var interval = setInterval(function() {
	if(document.getElementsByClass("myImg").value == "立即购买") {
		alert("OK");
		clearInterval(interval);
	}
},5000);

var interval = setInterval(function() {
	if($("img[alt='立即购买']")) {
		alert("OK");
		clearInterval(interval);
	}
},5000);