//getting rest of array using spread operator

const nums = [1,2,3,4,5,6,7,8,9,10];

const [num1,num2,num3,...rest] = nums;
console.log(num1,num2,num3,rest);