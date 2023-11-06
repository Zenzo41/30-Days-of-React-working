const countries = ['Finland','Estonia','Sweden','Norway']
const newCountries = countries.map(function (country)
{
    return country.toUpperCase()
})

console.log(newCountries)