// Create three functions. checkParamsFn, checkOverEighteenFn & calculateAgeFn.
// The first function checks your parameters and returns
// true if all of them are integers, whereas returns false if not.
// The second function is self explanatory.
// The third function, uses the first and second functions to check its inputs
// and returns an error message that starts with "error:"
// This function should return a rounded age.
// READING MATERIALS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// https://www.w3schools.com/js/js_dates.asp
// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript
// HINT: recycling code is never bad practice.

// This functions should check the integrity of the parameters and pass true/false
function checkParamsFn(year, month, day) {
  // Write your code here
  const x = parseInt(year)
  const y = parseInt(month)
  const z = parseInt(day)

if(x===year && y===month && z===day) {
  return true
}

 return false
}

console.log(checkParamsFn(1993, 12 ,25))


// This functions checks if the person is or above 18 years of age, return true/false
function checkOverEighteenFn(year, month, day) {
 
  if (2021-year >= 18){
    if (2021 - year === 18 && (month >5 || (month=5 && day >18) )) {
      return false;
    }
    return true
  }
  return false
  

}
console.log(checkOverEighteenFn(2000, 4 ,19))

function calculateAgeFn(year, month, day) {
  // Write your code here
  if(!checkParamsFn(year,month,day) || !checkOverEighteenFn(year,month,day)){
    return "error" ;
  }
let age = 2021 - year;
if(month>=5 && day>18){
  age=age-1;
}
return (age);

}
console.log(calculateAgeFn(2000,11,30))


// Look at the naming of the functions. it looks like salwaBaqer, where
// the first letter of the first word is small, while the first letter of the
// second word is Capital. This is called "Camel Casing."
// Also the Fn at the end of the function name is short for function.
// str = String, int = Integer, arr = Array, obj = Object, fn = Function
// It's best practice to name your function as to what it does, or your variable
// to what it holds.

module.exports = calculateAgeFn;
