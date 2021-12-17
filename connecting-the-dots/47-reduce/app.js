// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations - accumulator
// 2 parameter ('curr') - current iteration/value - current

const people = [
  {
    name: "Jericho",
    age: 21,
    position: "developer",
    salary: 200,
  },
  {
    name: "Hermione",
    age: 25,
    position: "designer",
    salary: 300,
  },
  {
    name: "Harry",
    age: 26,
    position: "Engineer",
    salary: 400,
  },
  {
    id: 4,
    name: "John",
    age: 23,
    position: "Product Manager",
    salary: 500,
  },
  {
    id: 5,
    name: "Peter",
    age: 29,
    position: "CEO",
    salary: 800,
  },
];

// always return the accumulator (first parameter)
const total = people.reduce((acc, current) => {
  console.log(`total ${acc}`);
  console.log(`current money: ${current.salary}`);
  acc += current.salary;
  return acc;
}, 0);

console.log(total);
