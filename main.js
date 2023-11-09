//Inheritance

//Using inheritance we can access all the properties and the methods of the parent class. This reduces repetition of code. If you remember, we have a Person parent class and we will create children from it. Our children class could be student, teach etc.

class Person{
  constructor(name, age){
        this.name = name;
        this.age = age;
    }

}

class Student extends Person{
  constructor(name,age,grade){
    super(name,age);
    this.grade = grade;
  }
}
const p1 = new Person("Zen Sama",22);
const st1 = new Student(p1.name,p1.age , 'A');

console.log(p1);
console.log(st1);