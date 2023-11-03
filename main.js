function  weightOfObject (mass,gravity=9.81){
    let weight = mass * gravity + 'N';
    return weight;
}
console.log('Weight of object in Newton: ',weightOfObject(100));