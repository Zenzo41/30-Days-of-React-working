const countries = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland',
  ]

const [c1,c2,c3,...rest] = countries;
console.log(c1,c2,c3,rest);