// find
// returns single instance - in this case an object
// returns first match, if no match defined
// great for getting unique value

const people = [
  {
    id: 1,
    name: "Jericho",
    age: 21,
    position: "developer",
  },
  {
    id: 2,
    name: "Hermione",
    age: 27,
    position: "designer",
  },
  {
    id: 3,
    name: "Harry",
    age: 26,
    position: "Engineer",
  },
  {
    id: 4,
    name: "John",
    age: 23,
    position: "Product Manager",
  },
];

const person = people.find((person) => {
  return person.id === 3;
});

console.log(person); // { id: 3, name: 'Harry', age: 26, position: 'Engineer' }

// another example
const names = ["Jericho", "Hermione", "Harry"];

console.log(
  names.find((name) => {
    return name === "Hermione";
  })
);
