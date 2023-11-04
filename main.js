//Destructuring Nested Arrats

const fullStack = [
    ['HTML','CSS','JS','React'],
    ['Node','Express','MongoDB']
];

const [frontEnd,backEnd] = fullStack;
console.log(frontEnd,backEnd);

frontEnd.forEach((item,i,frontEnd)=>{
    console.log(`${i+1}. ${item}`);
});
