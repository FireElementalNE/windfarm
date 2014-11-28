

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
var count = 1;
setInterval(function(){
	console.log("We are now on map: " + count);
	switch(count) {
		case 1:
			windAmount = initWindData2(data1);
			break;
		case 2:
			windAmount = initWindData2(data2);
			break;
		case 3:
			windAmount = initWindData2(data3);
			break;
		case 5:
			windAmount = initWindData2(data4);
			break;
		case 6:
			windAmount = initWindData2(data5);
			break;
		case 7:
			windAmount = initWindData2(data6);
			break;
		case 8:
			windAmount = initWindData2(data7);
			break;
		case 9:
			windAmount = initWindData2(data8);
			break;
		case 10:
			windAmount = initWindData2(data9);
			break;
		case 11:
			windAmount = initWindData2(data10);
			break;
		case 12:
			windAmount = initWindData2(data11);
			break;
		case 13:
			windAmount = initWindData2(data12);
			break;
	}
	redoWindValue();
	colorfy();
	count++;
	if(count == 14) {
		count = 1;
	}
},100);

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
	populateColors();
	initBoxes();
	initButtons();
	updateCounts();
	updateProductionMoney();
	initTotalMoney();
});