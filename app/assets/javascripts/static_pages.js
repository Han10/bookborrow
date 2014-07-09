$(document).ready(function () {

$('body > .home-container').css({ 'height' : $(window).height() });
$('body > .home-container').css({ 'width' : $(window).width() });

// Height and Width of the Footer
$('#footer-outter-container').css({ 'height' : 0.1*$(window).height() });
$('#footer-outter-container').css({ 'width' : $(window).width() });


$("#dropdown").hide();

$('#cancel-button').css({'width' : $('#createbutton').width()+'px'});

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

//Pagination Javascript

$('a.next_page').html("Next") ;
$('span.previous_page.disabled').html("Previous");
$('a.previous_page').html("Previous") ;
$('span.next_page.disabled').html("Next");

//Notices Javascript

	$('span#close_unsuccessful_login').click( function(){
		$('div#unsuccessful_login').hide();
	});

//Signup Javascript
	$('#signup-first-name').keyup(alphaNumeric);
	$('#signup-last-name').keyup(alphaNumeric);
	$('#signup-email').keyup(emailValidation);
	$('#signup-pass').keyup(alphaNumeric);
	$('#signup-pass-conf').keyup(alphaNumeric);

});

function alphaNumeric(){


if(event.keyCode != 9 ){
	

		if($(this).val().match( /[^a-zA-Z0-9]/) || $(this).val() == ""){
			if(!$(this).parent().is('.field_with_errors')){
				$(this).wrap("<div class='field_with_errors'></div>");
				$(this).focus();
			}
		}else{
			if($(this).parent().is('.field_with_errors')){
				$(this).unwrap();
				$(this).focus();
			}else{
				if(!$(this).parent().is('.field_with_success')){
					$(this).wrap("<div class='field_with_success'></div>");
					$(this).focus();
				}
			}
		}
}
	return false;
}

function emailValidation(){

if(event.keyCode != 9 ){

		if(!$(this).val().match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/) || $(this).val() == ""){
			if(!$(this).parent().is('.field_with_errors')){
				$(this).wrap("<div class='field_with_errors'></div>");
				$(this).focus();
			}
		}else{
			if($(this).parent().is('.field_with_errors')){
				$(this).unwrap();
				$(this).focus();
			}else{
				if(!$(this).parent().is('.field_with_success')){
					$(this).wrap("<div class='field_with_success'></div>");
					$(this).focus();
				}
			}
		}
}
	return false;
}
