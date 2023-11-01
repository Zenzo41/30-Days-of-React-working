let a = 'JavaScript';
let b = 10; 
function letsLearnScope() {
  console.log(a, b) 
  let c = 30
  if (true) {
    let a = 'Python'
    let b = 20
    let d = 40 
    console.log(a, b, c) 
  }
  console.log(a, b) 
}
letsLearnScope()
console.log(a, b)