//Destructuring arrays

const numbers = [1,2,3];
const [n1,n2,n3] = numbers;
console.log(n1,n2,n3);

const constants = [2.72, 3.14, 9.81,37, 100]
const [e, pi, gravity, bodyTemp, boilingTemp] = constants
console.log(e, pi, gravity, bodyTemp, boilingTemp)

const countries = ['Finland', 'Sweden', 'Norway']
const [fin, swe, nor] = countries
console.log(fin, swe, nor)