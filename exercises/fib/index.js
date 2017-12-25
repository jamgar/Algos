// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {}
  return function(...args) {
    // Check cache if this function has been called before
    // with these args
    if (cache[args]) {
      return cache[args]
    }
    // If first time called with these args
    const result = fn.apply(this, args)
    // Store in cache
    cache[args] = result

    return result
  }
}

function slowFib(n) {
  // Recursive Solution
  if (n < 2) {
    return n
  }
// Note: that the new memoized version, 'fib',
// is called and not the 'slowFib'. I could have just kept
// the name 'fib' and over wrote the function below
  return fib(n - 1) + fib(n - 2)
}

const fib = memoize(slowFib)

module.exports = fib;

// Iterative Solution - My Solution
// function fib(n) {
//   const results = [0 , 1]
//   for (let i = 2; i <= n; i++) {
//     results.push(results[i - 2] + results[i - 1])
//   }
//   return results[n]
// }
