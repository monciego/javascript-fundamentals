// array properties and methods
let firstNames = ["jericho", "harry", "james", "hermiome", "ron"];

// length
console.log(firstNames.length); //5
// access item by index
console.log(firstNames[1]); // harry
console.log(firstNames[firstNames.length - 1]); // ron
// concat() method concatenates (joins) two or more arrays.
const lastNames = ["bantiquete", "potter", "hetfield", "granger", "weasly"];
const fullNames = firstNames.concat(lastNames);
console.log(fullNames);
// reverse() method reverses the order of the elements in an array.
console.log(fullNames.reverse());
// unshift() method adds new elements to the beginning of an array.
fullNames.unshift("John");
console.log(fullNames);
// shift() method removes the first item of an array.
fullNames.shift();
fullNames.shift();
console.log(fullNames);
// push() method adds new items to the end of an array.
fullNames.push("Peter");
console.log(fullNames);
// pop() method removes (pops) the last element of an array.
fullNames.pop();
fullNames.pop();
console.log(fullNames);
// splice() method adds and/or removes array elements.
// splice() method overwrites the original array.
// array.splice(index, howmany, item1, ....., itemX)
const names = fullNames.splice(2, 5);
console.log(names);
console.log(fullNames);
