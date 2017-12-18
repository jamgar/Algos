// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {}
  // Creates an object with the character as the key and the
  // the count as the value
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }
  const maxKey = Object.keys(charMap).reduce((a, b) => {
    return charMap[a] > charMap[b] ? a : b
  })
  return maxKey
}

module.exports = maxChar;

// Other solution
// function maxChar(str) {
//   const charMap = {}
//   let max = 0
//   let maxChar = ''
//   // Creates an object with the character as the key and the
//   // the count as the value
//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++
//     } else {
//       charMap[char] = 1
//     }
//   }
//
//   // Iterate over an Object the notice the 'in'
//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char]
//       maxChar = char
//     }
//   }
//
//   return maxChar
// }
//
// module.exports = maxChar
