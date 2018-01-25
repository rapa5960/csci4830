$(document).ready(function() {
	$("#element").show();
	$("#otherElement").hide();
});

$("#dialer_button").click(function() { // when "button_id" is clicked
	$("#content_dialer").show(); // show element
	$("#content_list").hide();	// hide other element
	$("#content_contact").hide();	// hide other element
});

$("#list_button").click(function() { // when "button_id" is clicked
	$("#content_list").show(); // show element
	$("#content_dialer").hide();	// hide other element
	$("#content_contact").hide();	// hide other element
});

$("#contact_button").click(function() { // when "button_id" is clicked
	$("#content_contact").show(); // show element
	$("#content_dialer").hide();	// hide other element
	$("#content_list").hide();	// hide other element
});
	
	
	
