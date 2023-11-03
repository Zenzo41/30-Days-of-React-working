const changeToUpperCase = (arr)=>{
    const newArr = []
    for (const element of arr)
    {
        newArr.push(element.toUpperCase())
    }
    return newArr
}

const inputArray = ['Sonam'];
const result = changeToUpperCase(inputArray);
console.log(result);