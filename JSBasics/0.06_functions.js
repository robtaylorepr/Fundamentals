var name

function cokes (a) {
	pennies      = 99 * a
	tax          = 0.07 * pennies
	totalPennies = pennies + tax
	n            = totalPennies / 100
	n            = n.toFixed(0)
	dollars      = n  //make into integer
	cents        = totalPennies % 100
	console.log (dollars + " and " + cents + "cents");
}

cokes(15);
