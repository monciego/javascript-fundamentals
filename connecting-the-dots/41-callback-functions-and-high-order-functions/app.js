// callback functions, high order functions, functions as first class objects/citizens

/* functions are first class object - stored in a variable(expression), passed an argument
to another function, return from the function (closure) */

/* High Order Functions - accepts another function as an argument or returns another function
as a result */

/* Callback functions - passed to a another function as an argument and executed inside that function */

// callback function
function morning(name) {
  return `Good morning ${name}`;
}
function afternoon(name) {
  return `Good afternoon ${name}`;
}

// example of high order function
function greet(name, callback) {
  callback();
  const myName = "Jericho";
  console.log(`${callback(name)}, my name is ${myName}`);
}
greet("Harry", morning);
greet("Peter", afternoon);

// bad practice
/* function greetMorning(name) {
  const myName = "Jericho";
  console.log(`Good morning ${name}, my name is ${myName}`);
}

function greetAfternoon(name) {
  const myName = "Jericho";
  console.log(`Good afternoon ${name}, my name is ${myName}`);
}

greetMorning("Harry");
greetAfternoon("Peter");
 */
