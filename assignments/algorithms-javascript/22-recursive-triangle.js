'use strict';

// Lecture 78 - Friday: r Triangle
// Recursive triangle: the total of 1 + 2 + 3 ... + n.
// triangle(0) is 0 and negative input is treated as 0.

function triangle(n) {
  if (n <= 0) return 0;
  return n + triangle(n - 1);
}

module.exports = {
  name: '22 - Recursive Triangle',
  run: triangle,
  cases: [
    { args: [0], expected: 0 },
    { args: [1], expected: 1 },
    { args: [2], expected: 3 },
    { args: [3], expected: 6 },
    { args: [5], expected: 15 },
    { args: [10], expected: 55 },
    { args: [-4], expected: 0 }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
