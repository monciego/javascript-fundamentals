// web storage api - provided by browser
// session storage, local storage
// setItem, getItem, removeItem, clear

/* localStorage.setItem("firstName", "Jericho");
sessionStorage.setItem("firstName", "Jericho"); */
// ("key", "value")

// set item
localStorage.setItem("username", "monciego");
localStorage.setItem("email", "jerichobantiquete@gmail.com");

// get item
console.log(localStorage.getItem("username"));

// remove item
localStorage.removeItem("username");
console.log(localStorage.getItem("username"));

// clear all items
localStorage.clear();
