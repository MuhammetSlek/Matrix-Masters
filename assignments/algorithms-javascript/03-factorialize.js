'use strict';

// Lecture 59 - Wednesday: Factorialize!
// Returns n! for a non-negative integer. 0! is 1 by definition.

function factorialize(number) {
  if (!Number.isInteger(number) || number < 0) {
    throw new RangeError('factorialize expects a non-negative integer');
  }

  let result = 1;
  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }
  return result;
}

module.exports = {
  name: '03 - Factorialize',
  run: factorialize,
  cases: [
    { args: [0], expected: 1 },
    { args: [1], expected: 1 },
    { args: [2], expected: 2 },
    { args: [5], expected: 120 },
    { args: [10], expected: 3628800 }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
