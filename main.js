const countries = ['Finland', 'Sweden', undefined, 'Norway']
const [fin, swe, ice = 'Iceland', nor, den = 'Denmark'] = countries
console.log(fin, swe, ice, nor, den)