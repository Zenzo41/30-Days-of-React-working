//Callback - higher order function where function can be passed as 
// parameter to another function

const callback = (n)=> n*n;
function cube(callback,n){
    return callback(n)*n;
}

console.log(cube(callback,2));