const fruits = ['apple','banana','cherry','date','fig'];

console.log(fruits);

console.log(fruits.splice(2,1)); // cherry is removed
console.log(fruits);

console.log(fruits.splice(1,2,'lemon','kiwi')); // banana and date are replaced
console.log(fruits);

console.log(fruits.splice(3,0,'grape')); //adding grape w/o removing/replacing any element
console.log(fruits);

console.log(fruits.splice(4,0,'melon'));
console.log(fruits);