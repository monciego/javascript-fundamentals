// implicit type conversion

const firstName = "Jericho";
const lastName = "Bantiquete";
const fullName = `${firstName} ${lastName}`;

console.log(fullName); // Jericho Bantiquete

const number = 5;
const number2 = 10;
const result = number + number2;
console.log(result); //15

// math operator on string
const value = firstName - lastName;
console.log(value); // NaN or not a number

let number3 = "10"; // '10' is a string
let number4 = "50"; // '50' is a string
const result2 = number3 - number4;
console.log(result2); // -40 -> the result2 is a number, because the javascript does the implicit type conversion
// BUT if you use the add(+) operator, it will give you a result of string
console.log(number3 + number4); // 1050 (it concatenate the two string variables)
// even if one of the variable returns string and the other is number, it will gives you a string result
