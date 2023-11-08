class Person{
    constructor(firstname,lastname,age,country,city)
    {
        this.firstname = firstname
        this.lastname= lastname;
        this.age = age;
        this.country = country;
        this.city = city;
    }
}

const person1 = new Person('Zen','Sama',22,'India','New Delhi');
console.log(person1);
console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);
console.log(person1.country);
console.log(person1.city);