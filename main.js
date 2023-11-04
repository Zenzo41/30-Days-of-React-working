const higherOrder = n =>{
    const doSomething = m =>{
        const doWhatever = t =>{
            return 2 * n + 3 * m + t;
        }
        return doWhatever
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))