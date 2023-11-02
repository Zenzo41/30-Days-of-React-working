const person = {
  firstName:"Zen",
  lastName: "Sama",
  skills: {
    coding: true,
    designing: false,
    photography: true,
  },
  getPersonInfo: function (){
    return `I am ${this.firstName} ${this.lastName} and I do photography: ${person.skills.photography}`;
  },
}

const thisPerson = person.getPersonInfo();
console.log(thisPerson);