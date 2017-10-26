"use strict"

let myMap = new Map(['a1','hello'], ['b2','goodbye']);

myMap.set('c3','Stay');
myMap.delete('a1');

console.log(myMap.size());
console.log(myMap);