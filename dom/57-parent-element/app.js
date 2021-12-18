// parentElement

const heading = document.querySelector("h2");
const parent = heading.parentElement;
parent.style.color = "blue";

// can chain this method
console.log(heading.parentElement.parentElement.parentElement);
