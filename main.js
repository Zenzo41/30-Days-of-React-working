const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evens = numbers.filter((n)=> n%2===0);
const odds = numbers.filter((n)=> n%2 !==0);

console.log(evens);
console.log(odds);