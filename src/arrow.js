"use strict"

function Prefixer(prefix){
	this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr) {
	let that = this //need to do this if we dont have an arrow function
	return arr.map(function(x) {
		console.log(that.prefix + x);
	});
}

let pre = new Prefixer('Hello ');
pre.prefixArray(['Brad', 'Jeff']);

//  Now Lets see how it would work with an arrow. function

function Prefixer2(prefix){
	this.prefix = prefix;
}

Prefixer2.prototype.prefixArray = function(arr) {
	return arr.map( (x) => {
		console.log(this.prefix + x);
	});
}

let pre2 = new Prefixer('Hello');
pre.prefixArray(['Brad', 'Jeff']);
