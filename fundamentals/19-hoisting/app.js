// Scoping is determining where variables, functions, and objects are accessible in your code during runtime.

// * Variable hoisting

/* Before running the code, the browser first get all declarations,
hoisting is the name of this process */

// JavaScript only hoists declarations, not initializations.

/* JavaScript Hoisting refers to the process whereby the interpreter allocates memory
for variable and function declarations prior to execution of the code */

/* Another unusual thing about variables in JavaScript is that you can refer 
to a variable declared later, without getting an exception. This concept is known as "hoisting"*/

console.log(m); // undefined
var m = 3;

// will return a value of undefined
var myvar = "my value";

(function () {
  console.log(myvar); // undefined
  var myvar = "local value";
})();

// * Function hoisting
// In the case of functions, only function declarations (name function) are hoisted—but not the function expressions (anonymous function)

// function declaration
example(); // output: i can read it
// Even though we call the function in our code first, before the function is written, the code still works.
function example() {
  console.log("I can read it");
}

// function expressions
// example2(); // example2 is not a function

var example2 = function () {
  console.log("I can read it");
};
