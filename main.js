const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland'];
const countriesWithLand = countries.filter((country) => {
    return country.includes('land');
});
console.log(countriesWithLand);
