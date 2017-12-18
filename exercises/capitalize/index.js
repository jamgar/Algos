// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // 2nd Solution
  // capitalizes the first letter of the sentence
  let result = str[0].toUpperCase()

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }

  return result
}

module.exports = capitalize;

// My Solution
// function capitalize(str) {
//   const strArray = str.split(' ')
//   formated = strArray.map((word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1)
//   })
//   return formated.join(' ')
// }

// function capitalize(str) {
//   // 1st Solution
//   const words = []
//
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1))
//   }
//
//   return words.join(' ')
// }
