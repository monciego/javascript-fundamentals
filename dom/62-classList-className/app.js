// className
// classList

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const classValue = first.className;
console.log(classValue);

// add class using className
// problem - overwrite the first value
second.className = "text";
second.className = "colors";
// but you can pass two classes
second.className = "text colors";

// classlist best solution to add class
third.classList.add("colors");
third.classList.add("text");

// add multiple classes in classList
third.classList.add("blue", "text");

// remove class
third.classList.remove("text");

// contains
let result = third.classList.contains("blue");
console.log(result); // true
