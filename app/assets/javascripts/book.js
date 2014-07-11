$(document).ready(function () {

var book_id = null;
var user_id = null;
var book_email = null;

$('.header-container').css({ 'height' : 0.4* $(window).height() });
$('.bookcontainer').css({ 'height' : 0.3* $(window).height() });
$('.body-container').css({ 'min-height' : 0.8* $(window).height() });

$('#bookcontainer_view').css({ 'height' : 0.5* $(window).height() });
$('#view-request').css({ 'height' : 0.1* $(window).height() });


$('div#outter_modal').css({ 'height' :  $(window).height() });
$('div#outter_modal').css({ 'width' :  $(window).width() });
$('div#modal_header').css({ 'line-height' : $('div#modal_header_container').height()+"px" });
$('div#modal_send_button').css({ 'width' : $('div#modal_cancel_button').width()+"px" });



$('span#close').click(closeModal);
$('div#modal_cancel_button').click(closeModal);
$('div#outter_modal').hide();

$('div#request_button').click(openModal);
$('span#requestbutton').click(openModal);
$('div#modal_send_button').click(sendRequest);


$(document).mouseup(function (e)
{
    var container = $("div#modal");

    if (!container.is(e.target) 
        && container.has(e.target).length === 0) 
    {
        closeModal();
    }
});


});


function openModal() {

	var book_title = $(this).data("book-title");
	var book_poster_last_name = $(this).data("last-name");
	var user_email = $(this).data('user-email');
	book_email = $(this).data("book-email");
	user_id = $(this).data("user-id");
	book_id = $(this).data("book-id");

	$('div#modal_header').html("Request: <em>"+book_title+"</em>");
	$('div#modal_body_container').html(
		"<div id='posted_by'><strong>To:</strong> <em>"+book_poster_last_name+"</em></div><br>"+
		"<div id='posted_by_email'><strong>From: </strong>"+user_email+"</div>"
		);
		
	 $('div#outter_modal').fadeTo(200, 1);

	 return false;
}

function closeModal() {

	$('div#outter_modal').fadeTo(200, 0);
	$('div#outter_modal').delay(500).css({ 'display' :  "none" });

	return false;
}

function sendRequest(){

	var message = $('textarea#modal_message').val();
	
	$.ajax({

		url : "/requestmodal",
		type : "POST",
		dataType : "JSON",
		data : {
			message : message,
			book_id : book_id,
			user_id : user_id,
			book_email : book_email
		}, 
			success: function(data, textStatus, jqXHR){
      		 closeModal();
     	},
    	 	error: function(jqXHR, textStatus, errorThrown){
  	     	alert("Error!");
     	}
  	 });

	return false;
}
 