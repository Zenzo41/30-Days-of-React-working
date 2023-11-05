// Destructuring when we loop through arrays

const fullStack = [
    ['HTML','CSS','JS','React'],
    ['Node','Express','MongoDB'],
]

for(const [first,second,third,fourth="That's it"] of fullStack)
{
    console.log(first,second,third,fourth)
}

//React Hooks useState hook?
const [x,y] =[2,(value) => value **2 ]
console.log(x);