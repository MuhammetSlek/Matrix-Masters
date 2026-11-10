'use strict';

// Lecture 61 - Friday: 3rd Highest Number in Array
// Duplicates do not count as separate places. Returns null when the array
// has fewer than three distinct numbers.

function thirdHighest(numbers) {
  const unique = [...new Set(numbers)].sort((a, b) => b - a);
  return unique.length >= 3 ? unique[2] : null;
}

module.exports = {
  name: '05 - 3rd Highest Number',
  run: thirdHighest,
  cases: [
    { args: [[5, 3, 9, 7]], expected: 5 },
    { args: [[3, 2, 1, 4, 5, 4]], expected: 3 },
    { args: [[10, 20, 30]], expected: 10 },
    { args: [[1, 1, 1]], expected: null },
    { args: [[10, 20]], expected: null },
    { args: [[]], expected: null }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
