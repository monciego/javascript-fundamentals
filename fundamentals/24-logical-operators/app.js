// logical operators
// (|| = or), (&& = and), !

/* The 'and' operator returns True when both its left and right condition are True too.
When one or both conditions are False, the outcome that and makes is False too. """

 The 'or' operator returns True when its left, right, or both conditions are True.
The only time that or returns False is when both conditions are False too.  */

const firstName = "jericho";
const age = 21;

// || or operator - if one in the condition is true, it will return true
if (firstName === "harry" || age === 21) {
  console.log("hello there"); // hello there
} else {
  console.log("error!");
}

// && and operator - returns true when both conditions are true,
// When one or both conditions are False, the result will be false

if (firstName === "harry" && age === 21) {
  console.log("hello there");
} else {
  console.log("error!"); // error
}
