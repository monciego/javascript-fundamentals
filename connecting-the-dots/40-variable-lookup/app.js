// variable lookup
// {} - code block

// if there is no variable in local scope
// javascript will find the variable to global scope

// if the variable is in local scope
// javascript start with the local scope

const globalNumber = 5;

function add(num1, num2) {
  const globalNumber = 10;
  const result = num1 + num2 + globalNumber;
  return result;
}

console.log(add(3, 4)); // 17
