// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  // Recursive Solution
  if (n === row) {
    return
  }

  if (n === stair.length) {
    console.log(stair)
    return steps(n, row + 1)
  }

  const addChar = stair.length <= row ? '#' : ' '
  steps(n, row, stair + addChar)
}

module.exports = steps;

// 1st Solution
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = ''
//
//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += '#'
//       } else {
//         stair += ' '
//       }
//     }
//     console.log(stair);
//   }
// }

// My Solution
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let steps = ""
//     for (let j = 1; j <= n; j++) {
//       if (j <= i) {
//         steps += "#"
//       } else {
//         steps += " "
//       }
//     }
//     console.log(steps)
//   }
// }
