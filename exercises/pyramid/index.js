// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  // 2nd Solution
  const midpoint = Math.floor((2 * n - 1) / 2)
  const col = level.length
  // Recursive Solution
  if (row === n) {
    return
  }
// if col equals n * 2 - 1, columns length,
// it has it needs to start a new row
  if (col === n * 2 - 1) {
    console.log(level)
    return pyramid(n, row + 1)
  }

  let addChar = ''
  if (midpoint - row <= col && midpoint + row >= col) {
    addChar = '#'
  } else {
    addChar = ' '
  }

  pyramid(n, row, level + addChar)
}

module.exports = pyramid;

// 1st Solution
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2)
//   for (let row = 0; row < n; row++) {
//     let level = ''
//
//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (midpoint - row <= col && midpoint + row >= col) {
//         level += '#'
//       } else {
//         level += ' '
//       }
//     }
//     console.log(level);
//   }
// }
