function initTotalMoney() {
	$('#cash').text(totalMoney);
	fixMoney($('#cash'),false);
}

function updateTotalMoney() {
	$('#cash').text(totalMoney);
	fixMoney($('#cash'),false);
}

function getWind(name) {
	var t = name.split('-');
	//console.log(totalWind); 
	//console.log(windAmount[parseInt(t[1])][parseInt(t[0])]);
	return windAmount[parseInt(t[1])][parseInt(t[0])];

}
function fixMoney(el,cont) {
	if(cont) {
		el.append('/hr');
	}
	el.prepend('$');
}
function updateProductionMoney() {
	pprod = totalWind * REVENUE_MULTIPLIER;
	pcost = turbineNum * COST_MULTIPLIER;
	$('#pprod').html(Math.round((100 *pprod)) / 100);
	$('#pcost').html(Math.round((100 *pcost)) / 100);
	fixMoney($('#pprod'),true);
	fixMoney($('#pcost'),true);
}
function updateStars(el,wind) {

	if(wind < 50) {
		el.attr('class','stars s05');
	}
	else if(wind >= 50 && wind < 100) {
		el.attr('class','stars s10');
	}
	else if(wind >= 100 && wind < 150) {
		el.attr('class','stars s15');
	}
	else if(wind >= 150 && wind < 200) {
		el.attr('class','stars s20');
	}
	else if(wind >= 200 && wind < 250) {
		el.attr('class','stars s25');
	}
	else if(wind >= 250 && wind < 300) {
		el.attr('class','stars s30');
	}
	else if(wind >= 300 && wind < 350) {
		el.attr('class','stars s35');
	}
	else if(wind >= 350 && wind < 400) {
		el.attr('class','stars s40');
	}
	else if(wind >= 400 && wind < 450) {
		el.attr('class','stars s45');
	}
	else if(wind > 450) {
		el.attr('class','stars s50');
	}
}
function updateCounts() {
  $('#turbineNum').html(turbineNum);
}
function oppositeButton(name) {
	if(name == 'windMillButton') {
		return 'windMeterButton';
	}
	else if(name == 'windMeterButton')
		return 'windMillButton';
}
function initClickedButtons(el) {
	el.click(
    function() {
    	if(clickedButton == false) {
			$( this ).css('background-color','DimGray');
			$( this ).css('color','Crimson');
    		clickedButton = true;
      	}
    	else {
    		clickedButton = false;
       		$( this ).css('background-color','#ecf0f1');
        	$( this ).css('color','#db6d20');
      	}
    });
    el.hover(
	function() {
		if(clickedButton == false) {
			$( this ).css('background-color','#ecf0f1');
		}
	},
	function() {
		if(clickedButton == false) {
			$( this ).css('background-color','MintCream');
		}
	});
}
function initButtons() {
	clicked['windMillButton'] = false;
	initClickedButtons($('#windMillButton'));
}
function initWindData() {
	temp = new Array(30);
	for(var i = 0; i < 30; i++) {
		temp[i] = new Array(30);
	}
	for(var j = 0; j < 30; j++) {
		for(var k = 0; k < 30; k++) {
			var idString = String(j + "-" + k);
			temp[j][k] = data1["data"][idString];//Math.floor((Math.random() * 100) + 1);
		}
	}
	return temp;
}
function initWindData2(d) {
	temp = new Array(30);
	for(var i = 0; i < 30; i++) {
		temp[i] = new Array(30);
	}
	for(var j = 0; j < 30; j++) {
		for(var k = 0; k < 30; k++) {
			var idString = String(j + "-" + k);
			temp[j][k] = d["data"][idString];//Math.floor((Math.random() * 100) + 1);
		}
	}
	return temp;
}