// createElemen('element')
// createTextNode('text content')
// element.appendChild(childElement)

// replaceChild('new', 'old')

const result = document.querySelector("#result");
const first = document.querySelector(".red");

// create empty element
const divElement = document.createElement("div");
// create text node
const text = document.createTextNode("simple div");
divElement.appendChild(text);

document.body.insertBefore(divElement, result);

const heading = document.createElement("h2");
const headingText = document.createTextNode("dynamic heading 2");
heading.appendChild(headingText);
heading.classList.add("blue");

result.insertBefore(heading, first);

const heading6 = document.createElement("h6");
const heading6Text = document.createTextNode("heading 6");
heading6.classList.add("red");
heading6.appendChild(heading6Text);
document.body.replaceChild(heading6, divElement);
