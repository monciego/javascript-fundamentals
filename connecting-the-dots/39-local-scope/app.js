// local scope
// can not be access from outside code blocks
// if - NOT VAR

// there is no name collision
// the variables can be access within the code block

let firstName = "Jericho";

function sayName() {
  const firstName = "Peter";
  const age = 21;
  console.log(`my name is ${firstName}`); // my name is Peter

  // becomes global if no keywords
  // keywords - let, const etc
  global = "i can be access outside this block";
}
sayName();
// console.log(age); // age is not defined
console.log(global); // i can be access outside this block

if (true) {
  const firstName = "Ned";
  console.log(`my name is ${firstName}`); // my name is Ned
}

console.log(`my name is ${firstName}`); // my name is Jericho
