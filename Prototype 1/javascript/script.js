function callMe() {
	console.log("ALSO ready!");
}

$( document ).ready(function() {
	$('.rate').prepend('$');
	$('.rate').append('/hr');
	$('.money').prepend('$');
});