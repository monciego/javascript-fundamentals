// select the element or group of element we want
// decide the effect we want to apply to the selection

// getElementsByClassName("classname");

// node-list = array-like object
// index, length property but not array methods

const listItems = document.getElementsByClassName("special");

console.log(listItems);

listItems[1].style.color = "blue";
