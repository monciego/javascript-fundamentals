// select the element or group of element we want
// decide the effect we want to apply to the selection

// querySelector('any css');  - selects single
// querySelectorAll('any css'); - selects all

const result = document.querySelector("#result");
result.style.backgroundColor = "blue";

const item = document.querySelector(".special");
console.log(item);

// last item
const lastItem = document.querySelector("li:last-child");
console.log(lastItem);

// querySelectorAll

const list = document.querySelectorAll(".special");

list.forEach((item) => {
  console.log(item);
  item.style.color = "yellow";
});
