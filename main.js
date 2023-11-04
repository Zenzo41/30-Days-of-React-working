const numbers = [1,2,3,4];

const sumArray = arr =>{
    let sum = 0 ;
    arr.forEach(function(element){
        sum += element;
    })
    return sum;
}

console.log(sumArray(numbers));