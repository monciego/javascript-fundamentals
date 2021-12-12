// return
// default undefined, shortcuts, ignores after

// 1 inch is equal to 2.54cm

// function that converts the inch to cm
function calculate(value) {
  // your code goes here...
  //   console.log(`The value in cm is ${value * 2.54}cm`);
  //   const newValue = value * 2.54;
  return value * 2.54;
}

// needs to be assigned in variable
const result = calculate(5);
console.log(result);

const width = calculate(10);
const height = calculate(50);

const dimensions = [width, height];
console.log(dimensions); //
