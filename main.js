a = 'JAVASCRIPT';
b = 100;
function LearnScope(a,b){
    console.log(a,b);
    if(true){
        console.log(a,b);
    }
}
console.log(a,b);