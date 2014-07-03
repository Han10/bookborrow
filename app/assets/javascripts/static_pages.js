$(document).ready(function () {

$('div#container').css({ 'height' : $(document).height() });
$('div#container').css({ 'width' : $(document).width() });


$("#signup_container").hide();
$("#dropdown").hide();
$("div#cancelbutton").hide();

$("#signupbutton").click( function(){
	$("#login_container").hide();
	$("#signupbutton").hide();
	$('#signup_container').fadeTo(200, 1);
	$('#cancelbutton').fadeTo(200, 1);
});

$("#topdropdown").click(function(){

		if($("#dropdown").is(":visible")){
			$("#dropdown:visible").hide(0);	
		}else{
			$("#dropdown:hidden").effect("slide",{"direction" : "up"}, 500);
		}
});

$(document).mouseup(function (e)
{
    var container = $("#account_dropdown");

    if (!container.is(e.target)
        && container.has(e.target).length === 0) 
    {
        $("#dropdown").hide();
    }
});

$("#cancelbutton").click( function(){
	$("#signup_container").hide();
	$("#cancelbutton").hide();
	$('#login_container').fadeTo(200, 1);
	$('#signupbutton').fadeTo(200, 1);
});

$('a.next_page').html("Next") ;
$('span.previous_page.disabled').html("Previous");
$('a.previous_page').html("Previous") ;
$('span.next_page.disabled').html("Next");

});