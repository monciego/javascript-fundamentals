// event object - argument e, evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword - conflicts using arrow function.
// preventDefault() = prevents default behaviour

const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");
const link = document.getElementById("link");

heading.addEventListener("click", (event) => {
  console.log(event.currentTarget);
  event.currentTarget.classList.add("blue");
});

btn.addEventListener("click", (e) => {
  e.currentTarget.classList.add("blue");
  console.log(e.type);
});

function prevent(e) {
  e.preventDefault(); // prevents the default behavior which is page refresh
}

link.addEventListener("click", prevent);
