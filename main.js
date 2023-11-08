class Person {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
const person1 = new Person("Zen","Sama");
const person2 = new Person("Ab","Sama");
const person3 = new Person("asca","Sama");

console.log(person1);
console.log(person1);
console.log(person1);