// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]

describe('nameAndOccupation', () => {
  it('takes in an array of objects and returns an array with a sentence about each person with their names capitalized', () => {
    expect(nameAndOccupation(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})



// b) Create the function that makes the test pass.

//Create func that will take in an array of objects
//map through the objects and access the names by value.name
//split at the ' ' to isolate first and last names which can then be accessed by index
//substr the first letter to use toUpperCase and then add the rest of the string back
//add string interpolation for the occupation ${value.occupation}

const nameAndOccupation = (arr) => {
  return arr.map(value => {
     return(((value.name.split(' '))[0].substr(0,1).toUpperCase()) + ((value.name.split(' '))[0].substr(1))
     + ' ' + ((value.name.split(' '))[1].substr(0,1).toUpperCase()) + ((value.name.split(' '))[1].substr(1)) + ` is a ${value.occupation}.`)
  })
}


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe('modulo3', () => {
  it('takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3', () => {
    expect(modulo3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(modulo3(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// b) Create the function that makes the test pass.

//filter for numbers in array with .filter and typeof
//.map to modulo each value by three

const modulo3= (mixedArr) => {
  return mixedArr.filter(value => {
    return typeof value == 'number'
  }).map(value => {
    return value % 3
  })
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125



// b) Create the function that makes the test pass.
