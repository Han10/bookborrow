$(document).ready(function () {

$('.home-container').css({ 'height' : $(window).height() });
$('.home-container').css({ 'width' : $(window).width() });

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

$('a.next_page').html("Next") ;
$('span.previous_page.disabled').html("Previous");
$('a.previous_page').html("Previous") ;
$('span.next_page.disabled').html("Next");

//Notices Javascript

	$('span#close_unsuccessful_login').click( function(){
		$('div#unsuccessful_login').hide();
	});

//Signup Javascript

});
