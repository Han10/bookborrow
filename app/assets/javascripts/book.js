$(document).ready(function () {

$('.book_container').css({ 'height' : 2.25* $(window).height() });
$('.book_container').css({ 'width' : $(window).width() });

$('.small_book_container').css({ 'height' : $(window).height() });
$('.small_book_container').css({ 'width' : $(window).width() });

$('div#outter_modal').css({ 'height' :  $(window).height() });
$('div#outter_modal').css({ 'width' :  $(window).width() });



$('div#outter_modal').click( closeModal );
$('span#close').click( closeModal );
$('div#outter_modal').hide();

$('div#request_button').click(openModal);
$('span#requestbutton').click(openModal);



});


function openModal() {

var book_id = $(this).data("book-id");

  /* MAKING AN AJAX REQUEST */
 $('div#outter_modal').fadeTo(200, 1);

}

function closeModal() {

	$('div#outter_modal').fadeTo(200, 0);
	$('div#outter_modal').delay(200).css({ 'display' :  "none" });

}
