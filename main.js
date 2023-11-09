//Static Method
//The static method is a special type of method that belongs to the class rather than an instance of a class. It can be called on any object

class Demo{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  get getNameandAge()
  {
    const nameandage = `Your name is ${this.name} and you are ${this.age} years old`;
    return nameandage;
  };

  static dateandtime()
  {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }
}

const p1 = new Demo('Zen Sama', 77);
console.log(p1.getNameandAge);
console.log(Demo.dateandtime());
// console.log(p1.dateandtime()); doesnt work as it isnt class but its instance 

