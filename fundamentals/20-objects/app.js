// objects - key/value pair methods
// dot notation

const person = {
  firstName: "Jericho",
  lastName: "Bantiquete",
  age: 21,
  student: true,
  programmingLanguages: ["JavaScript", "Python", "PHP"],
  greeting: function () {
    console.log("Hello");
  },
  // in es6 it's okay to don't have a property in a fucntion
  sayName() {
    console.log(`Hello my name is ${person.firstName}`);
  },
};

console.log(person.firstName); // Jericho
console.log(person.age); // 21
console.log(person.student); // true
console.log(person.programmingLanguages); // [ 'JavaScript', 'Python', 'PHP' ]
person.greeting(); // Hello

// modifying a value
person.age = 22;
console.log(person.age); // 22

person.sayName();
