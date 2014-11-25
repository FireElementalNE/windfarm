function findMax() {
  var max = 0;
  var tmp = data["data"];
  for(var key in tmp) {
    if(tmp[key] > max) {
      max = tmp[key];
    }
  }
  return max;
}

function findMin() {
  var min = 99999999;
  var tmp = data["data"];
  for(var key in tmp) {
    if(tmp[key] < min) {
      min = tmp[key];
    }
  }
  return min;
}

function populateColors() {
  var max = findMax();
  var min = findMin();
  var step = (max - min) / 10;
  console.log(max + " " + min + " " + step)
  for (var i = 0; i <= 10; i++ ) {
    COLORS[i] = min + (step * (i));
  }
}

function getOpacity(amount) {
  minabsindex = -1;
  minabs = 999999;
  for(var i = 0; i < COLORS.length; i++) {
    if(Math.abs(amount - COLORS[i]) < minabs) {
      minabs = Math.abs(amount - COLORS[i]);
      minabsindex = i;
    }
  }
  step = Math.round((1.0 / COLORS.length)*100)/100;
  var op = step * minabsindex;
  return op;
}