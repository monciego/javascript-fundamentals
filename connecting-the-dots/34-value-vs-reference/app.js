// reference vs value
// primitive data types
// string, numbers, symbol, boolean, undefined, null
// arrays, functions, Objects = object
// typeof

/* when assigning primitive data types value to a variable any 
changes are made directly to that value, without affecting original value*/

/* when assigning non-primitive data type value to a variable is
done by reference so any changes will affect all the references. */

const number = 1;
let number2 = number;
number2 = 8;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person = { firstname: "Jericho" };
let person2 = person;
person2.firstname = "Harry";

console.log(`the name of the first person is ${person.firstname}`);
console.log(`the name of the second person is ${person2.firstname}`);
