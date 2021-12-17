// map
// does return a new array
// does not change size of original array
// uses value from original array when making a new one

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

const ages = people.map((person) => {
  return person.age + 20;
});

// short
const ages2 = people.map((person) => person.age + 20);

// another example (return an object)
const newPeople = people.map(function (person) {
  return {
    firstName: person.name,
    age: person.age,
  };
});

console.log(ages); // [ 41, 45, 46 ]
console.log(ages2); // [ 41, 45, 46 ]
console.log(newPeople);
