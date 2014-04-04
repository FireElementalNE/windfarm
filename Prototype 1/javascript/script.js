function callMe() {
	console.log("ALSO ready!");
}

function starsEnter(el) {
	if(el == 'research') {
		$('#researchQuality').attr('src','resources\\Images\\stars2.png');
	}
	else if(el == 'production') {
		$('#productionQuality').attr('src','resources\\Images\\stars2.png');
	}
}

function starsLeave(el) {
	if(el == 'research') {
		$('#researchQuality').attr('src','resources\\Images\\stars1.png');
	}
	else if(el == 'production') {
		$('#productionQuality').attr('src','resources\\Images\\stars1.png');
	}
}

$( document ).ready(function() {
	$('.rate').append('/hr');
	$('.money').prepend('$');
});