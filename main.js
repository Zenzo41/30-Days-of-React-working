//Default parameters

function greetings(name = 'Zen'){
    let message = `${name}, welcome to the class`;
    return message;
}
console.log(greetings());
console.log(greetings("Sonam"));
