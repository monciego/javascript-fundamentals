// innerHTML
// textContent

const list = document.getElementById("first");
const div = document.getElementById("second");
const item = document.querySelector(".item");

// textContent - return the text
// innerHTML - return the whole element structure

const ul = document.createElement("ul");
ul.innerHTML = `<li class="item">list item</li>
<li>list item</li> <li>list item</li>`;
document.body.appendChild(ul);

div.textContent = "hello world";
