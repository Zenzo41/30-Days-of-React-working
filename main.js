// if else if

let num = "a";
if(num>0){
    console.log(`${num} is a positive number`);
} else if (num<0){
    console.log(`${num} is a negative number`);
}else if(num==0){
    console.log(`${num} is zero`);
}else{
    console.log(`${num} is not a number`)
}


let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}