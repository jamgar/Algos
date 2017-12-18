// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

const cleanString = (str) => {
  // Removes spaces and punctuation
  // Sort strings
  return str.replace(/[^\w]/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('')
}

module.exports = anagrams;

// NOTES:
// RegExp for removing spaces, punctuation and just
// returning alphanumeric characters
// word.replace(/[^\w]/g, "").toLowerCase()

// MY SOLUTION
// function anagrams(stringA, stringB) {
//   const charMapA = {}
//   const charMapB = {}
//   // * remove spaces, punctuation, and convert to toLowerCase
//   newStrA = stringA.replace(/[^\w]/g, "").toLowerCase()
//   newStrB = stringB.replace(/[^\w]/g, "").toLowerCase()
//   // * convert to object
//   for (let char of newStrA) {
//     charMapA[char] = charMapA[char] + 1 || 1
//   }
//   for (let char of newStrB) {
//     charMapB[char] = charMapB[char] + 1 || 1
//   }
//   // Create arrays of property names
//   const propsA = Object.getOwnPropertyNames(charMapA)
//   const propsB = Object.getOwnPropertyNames(charMapB)
//   // Check length for same
//   if (propsA.length != propsB.length) {
//     return false
//   }
//
//   for (let i = 0; i < propsA.length; i++) {
//     let = propName = propsA[i]
//     // If values of same properties are not equal then false
//     if (charMapA[propName] != charMapB[propName]) {
//       return false
//     }
//   }
//
//   return true
// }

// FIRST SOLUTION
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA)
//   const bCharMap = buildCharMap(stringB)
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false
//   }
//   // compare objects
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false
//     }
//   }
//
//   return true
// }
//
// const buildCharMap = (str) => {
//   const charMap = {}
//
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
//   }
//
//   return charMap
// }
