const numbers = [1,2,3,4];
const sumArray = arr => {
    let sum = 0;
    const callback = function(element){
        sum += element;
    }
    arr.forEach(callback)
    {
        return sum
    }
}

console.log(sumArray(numbers));