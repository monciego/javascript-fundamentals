// forEach
// does not return new array

const people = [
  {
    name: "Jericho",
    age: 21,
    position: "developer",
  },
  {
    name: "Hermione",
    age: 25,
    position: "designer",
  },
  {
    name: "Harry",
    age: 26,
    position: "Engineer",
  },
];

// forEach() method calls a function for each element in an array.

people.forEach((person) => {
  console.log(`I am ${person.name} and i'm ${person.age} years old`);
});

// another example

function showPerson(person) {
  console.log(`I am ${person.name} and i'm ${person.position}`);
}

people.forEach(showPerson);
