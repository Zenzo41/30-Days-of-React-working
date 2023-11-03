// Function with unlimited number of parameters

function sumAllNums()
{
    let sum = 0;
    for(let i=0; i<arguments.length; i++)
    {
        sum += arguments[i];
    }
    return sum;
}

console.log(sumAllNums(1,2,3,5));

//arrow function

const arrowSum = (...args) => { // ... parameter followed by spread operator
    console.log(args)
}

arrowSum(2,3,4,5,44);

//Anonymous function or without name

const anonymousFun = function () {
  console.log(
    'I am an anonymous function and my value is stored in anonymousFun'
  )
}
console.log(anonymousFun);

//Expression Function

const square = function (n) {
    return n*n;
}
console.log(square(3));

//Self invoking function
let squaredNum = function (n) {
    return n*n;
}
console.log(squaredNum(22));