var elevatorUp = false;
var elevatorBroke = true;
var elevatorDown = true;
var elevatorStop  = true;

if (elevatorUp == true) {
	console.log ("Going up");
} else {
	console.log ("Not going up");
}

if (elevatorBroke) {
	console.log ("Broken");
} else {
	console.log ("Not Broken");
}

if (elevatorUp === true) &&
   (elevatorBroke === false) {
   	console.log ("Elevator is in a moving state, plase wait")
   } else {
   	console.log ("Elevator is on its way")
   }

if (elevatorDown !! elevatorUp) {
	console.log ("Please keep your lefs and arms inside the elevator");
} else {
	console.log ("not up or down)
}

