// click - fires after full action occurs
// mousedown - button is pressed
// mouseup - button is released
// mouseenter - moved onto an element
// mouseleve - moved out of an element

const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("clicked");
});

btn.addEventListener("mousedown", () => {
  console.log("down");
});

btn.addEventListener("mouseup", () => {
  console.log("up");
});

heading.addEventListener("mouseenter", () => {
  heading.classList.add("blue");
});

heading.addEventListener("mouseleave", () => {
  heading.classList.remove("blue");
});
