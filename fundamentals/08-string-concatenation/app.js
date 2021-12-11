// string concatenations - combine string values
// `` - backticks (template strings) easier option.

const firstName = "Jericho";
const lastName = "Bantiquete";
const age = 21;

// using quotations marks
console.log(
  "Hello! My name is " + firstName + " " + lastName,
  "and i'm " + age,
  "years old"
);

console.log(
  `Hello! My name is ${firstName} ${lastName} and i'm ${age} years old`
);

// another example
const website = "google";
const url = `https://www.${website}.com`;

console.log(url);
