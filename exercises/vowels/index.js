// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // 2nd Solution
  // g = Does not stop at first match
  // i = case insensitive
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}

module.exports = vowels;

// function vowels(str) {
//   // 1st Solution
//   let count = 0
//   const vowelChars = ['a', 'e', 'i', 'o', 'u']
//
//   for (let char of str.toLowerCase()) {
//     if (vowelChars.includes(char)) {
//       count++
//     }
//   }
//   return count
// }

// My Solution
// function vowels(str) {
//   const vowelChars = ['a', 'e', 'i', 'o', 'u']
//   let numberOfVowels = 0
//   let letters = str.toLowerCase().split('')
//   letters.map((letter) => {
//     vowelChars.map((vowel) => {
//       if (letter === vowel) {
//         numberOfVowels += 1
//       }
//     })
//   })
//   return numberOfVowels
// }
