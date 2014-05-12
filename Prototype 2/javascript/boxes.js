var red = 255;
var green = 0;
var blue = 0;
var MAXCOL = 45;
var MAXROW = 45;
stage = 1;
var clicked = new Array();
function inner(id) {
  var el = '\t\t<div id=\"' + id + '\" class=\"box\"></div>\n'
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
function updateColors() { // for testing
  // blue increases to 255
  // red decreases to 0
  // green increases to 255
  // blue decreases to 0
  // red increases to 255
  // green decreases to 0
  if(stage == 1) {
    if(red == 255 && blue == 255 && green == 0) {
      stage = 2;
    }
    else {
      blue++;
    }
  }
  else if(stage == 2) {
    if(red == 0 && blue == 255 && green == 0) {
      stage = 3;
    }
    else {
      red--;
    }
  }
  else if(stage == 3) {
    if(red == 0 && blue == 255 && green == 255) {
      stage = 4;
    }
    else {
      green++;
    }
  }
  else if(stage == 4) {
    if(red == 0 && blue == 0 && green == 255) {
      stage = 5;
    }
    else {
      blue--;
    }
  }
  else if(stage == 5) {
    if(red == 255 && blue == 0 && green == 255) {
      stage = 6;
    }
    else {
      red++;
    }
  }
  else if(stage == 6) {
    if(red == 255 && blue == 0 && green == 0) {
      stage = 1;
    }
    else {
      green--;
    }
  }
}
function hoverColor(el) {
  el.hover(
    function() {
    $( this ).css('opacity',1);
  },
  function() {
    if(clicked[el.attr('id')] == false) {
      $( this ).css('opacity',0);
    }
  });
  el.click(
    function() {
      if(clicked[el.attr('id')] == true) {
        $( this ).css('opacity',0);
        clicked[el.attr('id')] = false;
      }
      else {
       $( this ).css('opacity',1); 
       clicked[el.attr('id')] = true;
      }
    });
}
function colorfy() {
  for(var j = 0; j < MAXCOL; j++) {
    for(var i = 0; i < MAXROW; i++) {
      var curId = String(j) + '-' + String(i);
      colorR = ("0" + red.toString(16)).slice(-2);
      colorG = ("0" + green.toString(16)).slice(-2);
      colorB = ("0" + blue.toString(16)).slice(-2);
      color = '#' + colorR + colorG + colorB;
      $('#' + curId).css('background-color',color);
      $('#'+curId).css('opacity',0);
      hoverColor($('#'+curId));
      clicked[curId] = false;
      updateColors();
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