//  Spread Operator '...'
"use strict"

var num1 = [1,2];
var num2 = 1;

function testy() {
	console.log(num1);
}
testy.apply(null, num1);
testy(...num1);
