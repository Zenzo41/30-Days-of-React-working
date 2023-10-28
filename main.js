// for loop

/*
for (initialization,condition,increment/decrement)
{
    code goes here
}
*/

for (let i =0; i<6;i++)
{
    console.log(i);
}

//sum of all numbers from 0 to 100

let sum=0;
for(let i=0;i<101;i++){
    sum +=i;
}
console.log("The sum of numbers from 1 to 100 is: "+sum);

//sum of even numbers from 1 to 100

let total = 0;
for(let i=0;i<101;i++)
{
    if(i%2==0)
    {
        total +=i;
    }
}
console.log(total);