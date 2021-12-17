// filter
// does return a new array
// can manipulate the size of new array
// returns based on condition

const people = [
  {
    name: "Jericho",
    age: 21,
    position: "developer",
  },
  {
    name: "Hermione",
    age: 27,
    position: "designer",
  },
  {
    name: "Harry",
    age: 26,
    position: "Engineer",
  },
  {
    name: "John",
    age: 23,
    position: "Product Manager",
  },
];

// filter age less than or equal to 25
const youngPeople = people.filter((person) => {
  return person.age <= 25;
});

console.log(youngPeople); // prints the person that have age less than or equal to 25

// filter developer position

const developers = people.filter((person) => {
  return person.position === "developer";
});

console.log(developers);
