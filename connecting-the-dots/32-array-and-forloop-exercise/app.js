// arrays and for loops

const firstNames = ["Ron", "Fred", "George", "Ginny"];
const lastName = "Weasly";

let fullNames = [];

for (let i = 0; i < firstNames.length; i++) {
  console.log(i);
  console.log(firstNames[i]);
  fullNames.push(`${firstNames[i]} ${lastName}`);
}

console.log(firstNames);
console.log(fullNames);
