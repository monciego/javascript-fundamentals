// String properties and methods
// you don't have to memorize all properties and methods

let text = "JavaScript is awesome";

// length
console.log(text.length); // 21
// toLowerCase()
console.log(text.toLowerCase()); // javascript is awesome
// toUppercase()
console.log(text.toUpperCase()); // JAVASCRIPT IS AWESOME
// The charAt() method returns the character at a specified index (position) in a string.
console.log(text.charAt(0)); // J
console.log(text.charAt(text.length - 1)); // e
// indexOf() The indexOf() method returns the position of the first occurrence of a specified value in a string
// The indexOf() method returns -1 if the value is not found.
console.log(text.indexOf("S")); // e
// The trim() method removes whitespace from both sides of a string.
const trimText = "     this text have spaces                 ";
console.log(trimText.trim()); // this text have spaces
// The includes() method returns true if a string contains a specified string.
console.log(text.includes("Script")); // true
// The slice() method extracts a part of a string.
console.log(text.slice(1)); // avaScript is awesome
console.log(text.slice(0, 1)); // J
console.log(text.slice(-1)); // e
