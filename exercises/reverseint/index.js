// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('').
    reverse()
    .join('')

  return parseInt(reversed) * Math.sign(n)
}

module.exports = reverseInt;

// .toString() = convert int to string
// Math.sign(x) = checks if number is a positive (returns 1) or negative
// (returns -1)
// parseInt(somestring) = converts string to int
//
// My solution
// function reverseInt(n) {
//  const strNumbers = Math.abs(n).toString()
//  reversed = strNumbers.split('').reverse().join('')
//  if (Math.sign(n) === -1) {
//    reversed = `-${reversed}`
//  }
//  return parseInt(reversed)
//}
