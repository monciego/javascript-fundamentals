// regular function
/* const calculateArea = function (radius) {
  return 3.14 * radius ** 2;
}; */

// arrow function
const calculateArea = (radius) => {
  // you can remove the parenthesis if there's only one parameter
  return 3.14 * radius ** 2;
};

// Arrow functions do not bind their own this, instead, they inherit the
// one from the parent scope, which is called "lexical scoping".

const area = calculateArea(5);
console.log(area); // 78.5

// more arrow functions

// example1
const greet = () => "hello world"; // if you only have return on one line you can remove return keyword and {}
console.log(greet()); // hello world

// example2
const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(bill([10, 15, 30], 0.2)); // 66