//global scope

let a = 'Javascript';//global scope
let b = 10;//global scope

function GlobalScope()
{
    console.log(a,b);//global scope
    if (true){
        let a = 'Python';
        let b = 100
        console.log(a,b);//local scope
    }
    console.log(a,b);//global scope
}

GlobalScope();
console.log(a,b);//global scope