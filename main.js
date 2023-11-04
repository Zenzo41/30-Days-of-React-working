//Accessing array items using loop
numbers = [1,2,3,4,5];
countries = ['Finland','Nepal','USA','UK'];

countries.forEach((item,i,countries) => {
    console.log(`${i+1}. ${item}`)
});