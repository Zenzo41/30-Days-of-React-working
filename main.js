const  words = ['Hello','','World','!'];
const concatenatedString = words.reduce((accum,current)=> accum+current+' ');
console.log(concatenatedString);