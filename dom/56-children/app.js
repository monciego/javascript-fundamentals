// select the element or group of element we want
// decide the effect we want to apply to the selection

// childNodes - returns all childNodes including whitespace which is treated as a text node

// children
// firstChild
// lastChild

const result = document.getElementById("result");
const children = result.childNodes; // returns including whitespaces
console.log(children);

// children
const children1 = result.children;
console.log(children1);

// firstChild
console.log(result.firstChild);

// lastChild
console.log(result.lastChild);
