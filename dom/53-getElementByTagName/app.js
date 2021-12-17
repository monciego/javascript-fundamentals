// select the element or group of element we want
// decide the effect we want to apply to the selection

// getElementsByTagName("tagname");
// node-list = array-like object
// index, length property but not array methods

const headings = document.getElementsByTagName("h2");
console.log(headings);

headings[0].style.color = "red";
console.log(headings.length);

const items = document.getElementsByTagName("li");

items[2].style.color = "orange";
const betterItems = [...items];

betterItems.forEach((item) => {
  console.log(item);
});

console.log(items); // html collection
console.log(betterItems); // array
