// truthy and falsy
// "", '', ``, 0, -0, NaN, false, null, undefined -> they return false

const bool1 = true;
const bool2 = 2 > 1;

if (bool1) {
  console.log("hey it works"); // hey it works
}

if (bool2) {
  console.log("hey it also works"); // hey it also works
}

// returns true
const text1 = "Jericho";
if (text1) {
  console.log("the value is true"); // the value is true
} else {
  console.log("the vale is false");
}

// returns false
const text2 = "";

if (text2) {
  console.log("the value is true");
} else {
  console.log("the vale is false"); // the value is false
}
