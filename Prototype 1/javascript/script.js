var foggedElements = new Array();

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

function initFoggedElements() {
	temp = new Array();
	temp[0] = $('.smallToolWindow');
	temp[1] = $('#bg');
	temp[2] = $('.infoWindow');
	temp[3] = $('.toolbar');
	return temp;
}

function foggify(el) {
	el.foggy({
		blurRadius: 3,
		cssFilterSupport: true
	});
}

function screen2() {
	//$('.infoWindow').hide();

	for(var i = 0; i < foggedElements.length; i++) {
		foggify(foggedElements[i]);
	}
	$('.zoomWindMill').foggy(false);
}

$( document ).ready(function() {
	$('.rate').append('/hr');
	$('.money').prepend('$');
	foggedElements = initFoggedElements();
});