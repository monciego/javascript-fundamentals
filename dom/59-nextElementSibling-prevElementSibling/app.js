// previousElementSibling
// nextElementSibling
// no conflict in white space

const first = document.querySelector(".first");
first.nextElementSibling.style.color = "red";

const last = document.querySelector("#last");
last.previousElementSibling.style.color = "blue";
