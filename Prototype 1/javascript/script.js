function callMe() {
	console.log("ALSO ready!");
}

$( document ).ready(function() {
    console.log( "ready!" );
    callMe();
});