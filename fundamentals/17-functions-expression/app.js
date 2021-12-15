// function expression
// expression -> another way to define a function
// create a variable, assigned to FUNCTION (not value), use variable

// example of function declaration/definition
function add(num1, num2) {
  return num1 + num2;
}
const sum = add(5, 10);
console.log(sum);

// example of function expression
const multiply = function (num3, num4) {
  return num3 * num4;
};

const product = multiply(5, 5);
console.log(product);

// storing values in array
// add 1
const add1 = function (num1, num2) {
  return num1 + num2;
};
const value1 = add1(5, 10);
// add 2
function add2(num3, num4) {
  return num3 + num4;
}
const value2 = add2(10, 10);
// add 3
const add3 = function (num5, num6) {
  return num5 + num6;
};

//array
const valArrays = [value1, value2, add3(20, 10)];
console.log(valArrays);
