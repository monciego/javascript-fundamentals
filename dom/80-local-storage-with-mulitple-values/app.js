// JSON.stringify(), JSON.parse()

const people = ["Peter", "John", "Bob"];

localStorage.setItem("people", JSON.stringify(people));

const values = JSON.parse(localStorage.getItem("people"));
console.log(values[0]);
console.log(values[1]);

// checking if the values is in the local storage
let fruits;

if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}

console.log(fruits);
fruits.push("orange");
localStorage.setItem("fruits", JSON.stringify(fruits));

// localStorage.clear();
