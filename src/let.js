"use strict"

var a = "This is var a output";
var b = "This is var b output";

console.log(a);
console.log(b);

function testVar() {
	var a = 30;
	if(true) {
		var a = "50";
		console.log(a);
	}
	console.log(a);
}

function testLet () {
	let a = 30;
	if (true) {
		let a = 50;
		console.log(a);
	}
	console.log(a);
}

testVar();
testLet();