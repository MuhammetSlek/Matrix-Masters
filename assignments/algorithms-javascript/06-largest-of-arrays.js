'use strict';

// Lecture 62 - Monday: Largest Number in Arrays
// Takes an array of arrays and returns an array holding the largest
// number from each inner array.

function largestOfArrays(arrays) {
  return arrays.map((inner) => Math.max(...inner));
}

module.exports = {
  name: '06 - Largest Number in Arrays',
  run: largestOfArrays,
  cases: [
    { args: [[[1, 2, 3], [4, 5, 6]]], expected: [3, 6] },
    { args: [[[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39]]], expected: [27, 5, 39] },
    { args: [[[4, 9, 1], [-3, 0, 7]]], expected: [9, 7] },
    { args: [[]], expected: [] }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
