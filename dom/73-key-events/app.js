// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released

const nameInput = document.getElementById("name");

nameInput.addEventListener("keypress", () => {
  console.log("you pressed a key");
});

nameInput.addEventListener("keydown", () => {
  console.log("keydown");
});

nameInput.addEventListener("keyup", () => {
  console.log("keyup");
});
