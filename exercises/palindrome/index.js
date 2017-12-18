// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversed = str.split('').reverse().join('')
  // or
  // const reversed = str.split('').reduce((rev, char) => char + rev)
  return str === reversed
}

module.exports = palindrome;


// function palindrome(str) {
//    // Compares the every character with the it's mirror side of the string
//    // This issue is the it is a longer process
//    return str.split('').every((char, i) => {
//      return char === str[str.length -i -1]
//    }
//}
