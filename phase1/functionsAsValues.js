// copy to a file called functionsAsValues.js
// This is a function. It has no name and no parameters
() => {
    return 123;
  }
  // This is a function with one parameter, but still no name
  // And using briefer syntax that might help when we get to .map and .filter
  (n) => 2*n
  // you can see that it is a function like this
  console.log((n) => 2*n)

const doubleNumber = (n) => 2*n
console.log(doubleNumber)

const simpleCalculation = doubleNumber
console.log(simpleCalculation)