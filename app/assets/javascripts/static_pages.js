$(document).ready(function () {

$('body').css({ 'height' : $(window).height() });
$('body').css({ 'max-height' : 'none' });
$('body').css({ 'width' : $(window).width() });
$('body').css({ 'max-width' : 'none' });

$("#signup_container").hide();

$("#dropdown").hide();


$("#signupbutton").click( function(){
	$("#login_container").hide();
	$("#signupbutton").hide();
	$('#signup_container').fadeTo(200, 1);

});

$("#topdropdown").click(function(){

		if($("#dropdown").is(":visible")){
			$("#dropdown:visible").hide(0);	
		}else{
			$("#dropdown:hidden").effect("slide",{"direction" : "up"}, 500);
		}
});






$("#cancelbutton").click( function(){
	$("#signup_container").hide();
	$('#login_container').fadeTo(200, 1);
	$('#signupbutton').fadeTo(200, 1);
});



});