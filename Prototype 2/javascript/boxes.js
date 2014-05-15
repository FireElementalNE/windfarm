var red = 255;
var green = 0;
var blue = 0;
var MAXCOL = 45;
var MAXROW = 45;
stage = 1;
var clicked = new Array();

function inner(id) {
  t = id.split('-');
  var el = '\t\t<div id=\"' + id + '\" class=\"box\">'+ String(windAmount[parseInt(t[1])][parseInt(t[0])])+'</div>\n'
  return el;
}
function outer(id) {
  var start = '\t<div id=\"' + id + '\" class=\"outerBox\">\n';
  for(var i = 0; i < MAXCOL; i++) {
    start += inner(id+'-'+String(i));
  }
  end = start + '\t</div>\n';
  return end;
}
function hoverColor(el) {
  el.hover(
    function() {
    $( this ).css('opacity',0.25);
  },
  function() {
    if(clicked[el.attr('id')] == 'None') {
      $( this ).css('opacity',0);
    }
  });
  el.click(
    function() {
      if(clicked[el.attr('id')] != 'None') {
        type = clicked[el.attr('id')];
        if(type == 'Turbine') {
          turbineNum--;
          totalWind -= getWind(el.attr('id'))
        }
        else if(type == 'Meter'){
          meterNum--;
        }
        $( this ).css('opacity',0);
        clicked[el.attr('id')] = 'None';
      }
      else {
        type = checker();
        if(type == 'WindMill') {
          clicked[el.attr('id')] = 'Turbine';
          $( this ).css('opacity',0.25); 
          turbineNum++;
          totalWind += getWind(el.attr('id'))
        }
        else if(type == 'WindMeter'){
          $( this ).css('opacity',0.1); 
          clicked[el.attr('id')] = 'Meter';
          meterNum++;
        }
      }
      updateProductionMoney();
      updateStars();
      updateCounts();
    });
}
function colorfy() {
  for(var j = 0; j < MAXCOL; j++) {
    for(var i = 0; i < MAXROW; i++) {
      var curId = String(j) + '-' + String(i);
      $('#' + curId).css('background-color','#000');
      $('#'+curId).css('opacity',0);
      hoverColor($('#'+curId));
      clicked[curId] = 'None';
    }
  }
}
function positionBoxes() {
	topOffset = 2;
	leftOffset = -1436;
	for(var j = 0; j < MAXCOL; j++) {
    topOffset = 2;
		for(var i = 0; i < MAXROW; i++) {
		  var curId = String(j) + '-' + String(i);
		  $('#' + curId).css('margin-left',String(leftOffset) + 'px');
		  $('#' + curId).css('margin-top',String(topOffset) + 'px');
		  topOffset = topOffset + 19.955556;
		}
    leftOffset = leftOffset + 31.911111;
    
	}
}
function initBoxes() {
	var start = '<div id=\"START\">\n';
	for(var j = 0; j < MAXCOL; j++) {
	  start += outer(String(j));
	}
	end = start + '</div>\n';
	//console.log(end);
	$('#squares').append(end);
	positionBoxes();
	colorfy(); 
}