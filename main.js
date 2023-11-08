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
  
  const p1 = new Person('Zen','Sama',22,'Norway','Ottoman');
  p1.setScore = 1;
  p1.setSkill = 'HTML';
  p1.setSkill = 'CSS';
  p1.setSkill = 'Javascript';

  console.log(p1.getScore);
  console.log(p1.getSkills[0]);
  console.log(p1.getSkills[1]);
  console.log(p1.getSkills[2]);
  
  
