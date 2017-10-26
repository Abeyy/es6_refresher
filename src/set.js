"use strict"

let myArr = [1,2,3,'pokemon']
let mySet = new Set(myArr);

// .add, .clear, .delete, .size

mySet.clear();
mySet.add(100);
mySet.add('stringy');
mySet.delete(100); //Dont need index!

console.log(mySet.size);

mySet.forEach(function(val) {
	console.log(val);
});