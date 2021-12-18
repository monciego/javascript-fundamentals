// getAttribute()
// setAttribute()

// getAttribute()
const first = document.querySelector(".first");
const classValue = first.getAttribute("class");
const idValue = first.getAttribute("id");
console.log(classValue); // first
console.log(idValue); // special

const link = document.getElementById("link");
const showLink = link.getAttribute("href");
console.log(showLink);

// setAttribute()
const last = link.nextElementSibling;
last.setAttribute("class", "first");
last.textContent = "i have a class of first";

const links = document.querySelectorAll(".first");
