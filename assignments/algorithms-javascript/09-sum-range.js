'use strict';

// Lecture 65 - Thursday: Sum All Numbers in a Range
// Adds every whole number between the two arguments, including both ends.
// The arguments may be given in either order.

function sumRange(a, b) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);

  let total = 0;
  for (let i = start; i <= end; i += 1) {
    total += i;
  }
  return total;
}

module.exports = {
  name: '09 - Sum All Numbers in a Range',
  run: sumRange,
  cases: [
    { args: [1, 4], expected: 10 },
    { args: [4, 1], expected: 10 },
    { args: [-1, 2], expected: 2 },
    { args: [5, 5], expected: 5 },
    { args: [0, 0], expected: 0 }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
