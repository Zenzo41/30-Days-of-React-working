const evens = [0,2,4,6,8,10]
const odds = [1,3,5,7,9]

const evenNumbers = [...evens]
const oddNumbers = [...odds]

const wholeNumbers = [...odds,...evens];

console.log(wholeNumbers)