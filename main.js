const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  getFullName: function () {
    return `${person.firstName} ${person.lastName}`; // Added a space between the names
  },
  'phone number': '+3584545454545',
};

const fullName = person.getFullName(); // Now it will work
console.log(fullName); // Output: Asabeneh Yetayeh
