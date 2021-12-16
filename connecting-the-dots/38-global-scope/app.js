// global scope
// any variable outside code block {} is said to be in global scope
// can be access anywhere in the program
// problems: name collisions, modify by mistake

// one of the example of name collisions
let firstName = "Jericho";
firstName = "Harry";

function calculate() {
  // your code goes here...
  console.log(firstName);
  firstName = "Chair";
}
calculate();

if (true) {
  // your code goes here...
  console.log(firstName);
  firstName = "Go to the market";
}

console.log(`my name is ${firstName}`);
