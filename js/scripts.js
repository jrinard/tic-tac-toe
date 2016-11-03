var Space = function(x, y) {
	this.x = x;
	this.y = y;
  this.filled = false;
  this.contains = "";
}


Space.prototype.isAdjacentTo = function(spaceToCheck) {
	if (Math.abs(spaceToCheck.x - this.x) <= 1 && Math.abs(spaceToCheck.y - this.y) <= 1) {
	return true;
  } else {
  return false;
  }
}

var space1 = new Space(1,1);
var space2 = new Space(2,1);
var space3 = new Space(3,1);
var space4 = new Space(1,2);
var space5 = new Space(2,2);
var space6 = new Space(3,2);
var space7 = new Space(1,3);
var space8 = new Space(2,3);
var space9 = new Space(3,3);

var spaces = [space1, space2, space3, space4, space5, space6, space7, space8, space9];

var filledX = [];
var filledO = [];


function checkFilled(arrayOfSpaces, symbol, outputArray) {
	arrayOfSpaces.forEach(function(space){
  	if ((space.filled && space.contains === symbol) && !outputArray.includes(space)) {
    	outputArray.push(space);
    }
  });
};
