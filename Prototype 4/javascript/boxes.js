function inner(id) {
  t = id.split('-');
  var wind = windAmount[parseInt(t[1])][parseInt(t[0])];
  var el = '\t\t<div id=\"' + id + '\" class=\"box\" value=\"' + String(wind) +'"\"></div>\n'
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
function hoverColor(el,curId) {
  var originalOP;
  el.hover(
    function() {
      if(clicked[el.attr('id')] == 'None') {
        originalOP = $( this ).css('opacity');
        $( this ).css('opacity',0.99);
        $('#' + curId).css('background-color',BASECOLOR);
      }
    },
    function() {
      if(clicked[el.attr('id')] == 'Turbine') {
        $( this ).css('opacity',0.99);
      }
      else if(clicked[el.attr('id')] == 'None') {
        $( this ).css('opacity',getOpacity(parseInt($( this ).attr("value"))));
      }
  });
  el.click(
    function() {
      if(clickedButton == true) {
        if(clicked[el.attr('id')] != 'None') {
          type = clicked[el.attr('id')];
          if(type == 'Turbine') {
            totalWind -= getWind(el.attr('id'));
            turbineNum--;
          }
          $( this ).css('background-color',BASECOLOR); 
          $( this ).css('opacity',parseInt($( this ).attr("value")));
          clicked[el.attr('id')] = 'None';
        }
        else {
          clicked[el.attr('id')] = 'Turbine';
          $( this ).css('opacity',0.99);
          $( this ).css('background-color',MILLCOLOR); 
          totalWind += getWind(el.attr('id'))
          turbineNum++;
        }
        updateProductionMoney();
        updateStars($('#pstars'),totalWind);
        updateCounts();
      }
    });
}
function colorfy() {
  for(var j = 0; j < MAXCOL; j++) {
    for(var i = 0; i < MAXROW; i++) {
      var curId = String(j) + '-' + String(i);
      var wind = parseInt($('#' + curId).attr("value"));
      var op = getOpacity(wind);
      $('#' + curId).css('background-color',BASECOLOR);
      $('#'+curId).css('opacity',op);
      hoverColor($('#'+curId),curId);
      clicked[curId] = 'None';
    }
  }
}
function positionBoxes() {
  var multFactorWidth = targetWidthFull/factor
  var multFactorHeight = targetHeightFull/factor
	topOffset = 2;
	leftOffset = -1436;
	for(var j = 0; j < MAXCOL; j++) {
    topOffset = 2;
		for(var i = 0; i < MAXROW; i++) {
		  var curId = String(j) + '-' + String(i);
		  $('#' + curId).css('margin-left',String(leftOffset) + 'px');
		  $('#' + curId).css('margin-top',String(topOffset) + 'px');
		  topOffset = topOffset + multFactorHeight;
		}
    leftOffset = leftOffset + multFactorWidth;
    
	}
}

function initBoxes() {
  //debug(boxWidth + " " + boxHeight);
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

