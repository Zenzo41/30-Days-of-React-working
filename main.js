class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.country = country;
      this.city = city;
      this.score = 0;
      this.skills = [];
    }
  
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName;
      return fullName;
    }
  
    get getScore() {
      return this.score;
    }
  
    get getSkills() {
      return this.skills;
    }
  
    set setScore(score) {
      this.score += score;
    }
  
    set setSkill(skill) {
      this.skills.push(skill);
    }
  }
  
  const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki');
  const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo');
  
  person1.setScore = 1;
  person1.setSkill = 'HTML';
  person1.setSkill = 'CSS';
  person1.setSkill = 'JavaScript';
  
  person2.setScore = 1;
  person2.setSkill = 'Planning';
  person2.setSkill = 'Managing';
  person2.setSkill = 'Organizing';
  
  console.log(person1.getScore); // Corrected way to access the score using a getter
  console.log(person2.getScore); // Corrected way to access the score using a getter
  
  console.log(person1.getSkills); // Corrected way to access the skills using a getter
  console.log(person2.getSkills); // Corrected way to access the skills using a getter
  