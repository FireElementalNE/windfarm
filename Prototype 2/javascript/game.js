var windAmount;
var clickedButton = new Array(2);
function getWind(name) {
	var t = name.split('-');
	console.log(totalWind); 
	console.log(windAmount[parseInt(t[1])][parseInt(t[0])]);
	return windAmount[parseInt(t[1])][parseInt(t[0])];

}
function fixMoney(el) {
	el.append('/hr');
	el.prepend('$');
}
function updateProductionMoney() {
	pprod = turbineNum * 10;
	pcost = turbineNum * 15;
	$('#pprod').html(pprod);
	$('#pcost').html(pcost);
	fixMoney($('#pprod'));
	fixMoney($('#pcost'));
}
function updateStars() {
	if(totalWind < 50) {
		$('#pstars').attr('class','stars s05');
	}
	else if(totalWind >= 50 && totalWind < 100) {
		$('#pstars').attr('class','stars s10');
	}
	else if(totalWind >= 100 && totalWind < 150) {
		$('#pstars').attr('class','stars s15');
	}
	else if(totalWind >= 150 && totalWind < 200) {
		$('#pstars').attr('class','stars s20');
	}
	else if(totalWind >= 200 && totalWind < 250) {
		$('#pstars').attr('class','stars s25');
	}
	else if(totalWind >= 250 && totalWind < 300) {
		$('#pstars').attr('class','stars s30');
	}
	else if(totalWind >= 300 && totalWind < 350) {
		$('#pstars').attr('class','stars s35');
	}
	else if(totalWind >= 350 && totalWind < 400) {
		$('#pstars').attr('class','stars s40');
	}
	else if(totalWind >= 400 && totalWind < 450) {
		$('#pstars').attr('class','stars s45');
	}
	else if(totalWind > 450) {
		$('#pstars').attr('class','stars s50');
	}
}
function updateCounts() {
  $('#turbineNum').html(turbineNum);
  $('#meterNum').html(meterNum);
}
function oppositeButton(name) {
	if(name == 'windMillButton') {
		return 'windMeterButton';
	}
	else if(name == 'windMeterButton')
		return 'windMillButton';
}
function checker() {
	if(clickedButton[$('#windMillButton').attr('id')] == true) {
		return 'WindMill';
	}
	else if(clickedButton[$('#windMeterButton').attr('id')] == true) {
		return 'WindMeter';
	}
	else {
		return 'None';
	}
}
function initClickedButtons(el) {
	el.click(
    function() {
    	if(clickedButton[el.attr('id')] == false) {
     		if(clickedButton[oppositeButton(el.attr('id'))] == false) {
    			$( this ).css('background-color','DimGray');
    			$( this ).css('color','Crimson');
        		clickedButton[el.attr('id')] = true;
        	}
        	else {
        		$( this ).css('background-color','DimGray');
    			$( this ).css('color','Crimson');
        		clickedButton[el.attr('id')] = true;
        		clickedButton[oppositeButton(el.attr('id'))] = false;
        		opposite_el = $('#' + oppositeButton(el.attr('id')));
        		opposite_el.css('background-color','#ecf0f1');
        		opposite_el.css('color','#db6d20');
        	}
      	}
    	else {
    		clickedButton[el.attr('id')] = false;
       		$( this ).css('background-color','#ecf0f1');
        	$( this ).css('color','#db6d20');
      	}
    });
    el.hover(
	function() {
		if(clickedButton[el.attr('id')] == false) {
			$( this ).css('background-color','#ecf0f1');
		}
	},
	function() {
		if(clickedButton[el.attr('id')] == false) {
			$( this ).css('background-color','MintCream');
		}
	});
}
function initButtons() {
	clicked['windMillButton'] = false;
	clicked['windMeterButton'] = false;
	initClickedButtons($('#windMillButton'));
	initClickedButtons($('#windMeterButton'));
}
function initWindData() {
	temp = new Array(45);
	for(var i = 0; i < 45; i++) {
		temp[i] = new Array(45);
	}
	for(var j = 0; j < 45; j++) {
		for(var k = 0; k < 45; k++) {
			temp[j][k] = Math.floor((Math.random() * 100) + 1);
		}
	}
	return temp;
}