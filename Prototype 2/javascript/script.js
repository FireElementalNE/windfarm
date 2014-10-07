

var foggedElements = new Array();
var windAmount = new Array();
var turbineNum = 0;
var meterNum = 0;
var totalWind = 0;
var pprod = 0;
var pcost = 0;
var potentialRevWind = 0;
var potentialRevenue = 0;
var totalMoney = 10000;

setInterval(function(){
	totalMoney = Math.round(100 * (totalMoney + (pprod - pcost))) / 100;
	updateTotalMoney();
},1000);

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
function debug(s) {
	console.log(s);
}
$( document ).ready(function() {
	foggedElements = initFoggedElements();
	windAmount = initWindData();
	initBoxes();
	initButtons();
	updateCounts();
	updateProductionMoney();
	initTotalMoney();
});