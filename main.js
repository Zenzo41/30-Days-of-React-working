function calculateAge(birthYear, currentYear = 2023) {
    let age = currentYear - birthYear
    return age
  }
  
  console.log('Age: ', calculateAge(2001))