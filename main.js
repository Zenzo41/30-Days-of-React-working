//reduce
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = numbers.reduce((storage,currentElement)=> storage+currentElement)

console.log(sum);

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum1 = values.reduce((acc, cur) => acc + cur, 5)
console.log(sum1) 