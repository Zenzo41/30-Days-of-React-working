//Skipping item during destructuring
// put comma at that index

const countries = ['Finland', 'Sweden', 'Iceland', 'Norway', 'Denmark'];
const [fin, , ice, , den] = countries;
console.log(fin,ice,den);