// math
// standard built-in-objects - always available

// rounds number down
const number = 4.56789;
const result = Math.floor(number);
console.log(result); // 4

// rounds number up
const numberUp = Math.ceil(62.42426);
console.log(numberUp); // 63

// square root
const num = Math.sqrt(25);
console.log(num); // 5

// pi
const pi = Math.PI;
console.log(pi); // 3.141592653589793

// const minimum number from the items
const min = Math.min(5, 2, 41, 410, 40, 59);
console.log(min); // 2

// const maximum number from the items
const max = Math.max(5, 2, 41, 410, 40, 59);
console.log(max); // 410

// return random number
const random = Math.random(); // can be zero but cannot be one
console.log(random);

// print random numbers 1 - 10
const random10 = Math.floor(Math.random() * 10) + 1;
console.log(random10);
