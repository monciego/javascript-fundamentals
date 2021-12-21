// submit event listener
// prevent default
// how to get a value

const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submitted");
  console.log(username.value);
  console.log(password.value);
});
