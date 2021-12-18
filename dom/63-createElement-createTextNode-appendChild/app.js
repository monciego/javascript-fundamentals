// createElemen('element')
// createTextNode('text content')
// element.appendChild(childElement)

const result = document.querySelector("#result");

// create empty element
const divElement = document.createElement("div");
// create text node
const text = document.createTextNode("simple div");
divElement.appendChild(text);
document.body.appendChild(divElement);

const heading = document.createElement("h2");
const headingText = document.createTextNode("dynamic heading 2");

heading.appendChild(headingText);
heading.classList.add("blue");
result.appendChild(heading);
