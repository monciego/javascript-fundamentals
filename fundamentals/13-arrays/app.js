// arrays - array is a single variable that is used to store different elements.
// arrays - [], 0 index based
// you can store any data types, functions and objects

const people = ["Gilfoyle", "Dinesh", 21, true, undefined, null];

console.log(people); // [ 'Gilfoyle', 'Dinesh', 21, true, undefined, null ]

// access a value
let person = people[1];
console.log(person); // dinesh

console.log(people[0]); // Gilfoyle
console.log(people[3]); // true

// reassign a value
people[2] = 22;

console.log(people); // [ 'Gilfoyle', 'Dinesh', 22, true, undefined, null ]
console.log(people[2]); // 22
