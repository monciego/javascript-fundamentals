// allows select dynamic elements
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up --- default
// event capturing - fires at the root and fires until reaches target

/* Event capturing is the event starts from top element to the target element.
It is the opposite of Event bubbling, which starts from target element to the top element. */

const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubbling(e) {
  console.log("current target: ", e.currentTarget);
  /*   console.log("target: ", e.target);
  if (e.target.classList.contains("link")) {
    console.log("it is a link");
  } */
}

function stopPropagation(e) {
  console.log("you clicked on list");
  e.stopPropagation();
}

// list.addEventListener("click", showBubbling);
// list.addEventListener("click", stopPropagation);

// bubbling
/* container.addEventListener("click", showBubbling);
document.addEventListener("click", showBubbling);
window.addEventListener("click", showBubbling);
list.addEventListener("click", showBubbling);
 */

// capture
container.addEventListener("click", showBubbling, { capture: true });
document.addEventListener("click", showBubbling, { capture: true });
window.addEventListener("click", showBubbling, { capture: true });
list.addEventListener("click", showBubbling, { capture: true });
