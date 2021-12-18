// currentTarget = always refer to the element to which the event handler has been attached to
// target = identifies the element on which the event occured

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    /*    console.log(e.currentTarget);
    e.currentTarget.classList.add("green"); */
    console.log(e.target);
    e.target.classList.add("text-green");
  });
});
