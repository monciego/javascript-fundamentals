// data types
// primitive data types- string, number, boolean, null, undefined, symbol
// object - arrays, functions, objects

// typeof - operator (typeof variable) (typeof value)

// string
const str = "This is a string";
console.log(typeof str); // string

// number
const number = 45;
console.log(typeof number); // number

// boolean - true or false
const bool = true;
console.log(typeof bool); // boolean

// null
const result = null;
console.log(typeof null); // object (bug in javascript)
// bug in javascript which the null returns a typeof object

// undefined
const noValue = undefined;
let firstName;
console.log(typeof noValue); // undefined
console.log(typeof firstName); // undefined

// symbol(es6)
