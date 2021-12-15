// conditional statements
// else if and !(not)

const num1 = 100;
const num2 = 51;

if (num1 > 51) {
  console.log(`${num1} is greater than ${num2}`);
} else if (num1 === num2) {
  console.log(`${num1} is equals to ${num2}`);
} else {
  console.log(`${num1} is less than ${num2}`);
}

// not(!) operator

const value = false;

if (!value) {
  console.log(`The value is true`);
} else {
  console.log("The value is false");
}
