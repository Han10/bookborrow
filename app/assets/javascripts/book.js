$(document).ready(function () {

$('.book_container').css({ 'height' : 2.25* $(window).height() });
$('.book_container').css({ 'width' : $(window).width() });

$('.small_book_container').css({ 'height' : $(window).height() });
$('.small_book_container').css({ 'width' : $(window).width() });

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
	var book_poster_email = $(this).data("book-email");

	$('div#modal_header').html("Request: <em>"+book_title+"</em>");
	$('div#modal_body_container').html(
		"<div id='posted_by'><strong>Posted by:</strong> "+book_poster_last_name+"</div><br>"+
		"<div id='posted_by_email'><strong>"+book_poster_last_name+"'s email: </strong>"+book_poster_email+"</div>"
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
			message : message
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
 