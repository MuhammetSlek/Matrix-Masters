'use strict';

// Lecture 71 - Friday: Sum All Odd Fibonacci
// The sequence starts 1, 1, 2, 3, 5, 8, 13 ... and every odd term that does
// not exceed the limit is added. Both leading 1s count.

function sumOddFibonacci(limit) {
  let previous = 1;
  let current = 1;
  let total = 0;

  while (previous <= limit) {
    if (previous % 2 === 1) {
      total += previous;
    }
    const next = previous + current;
    previous = current;
    current = next;
  }

  return total;
}

module.exports = {
  name: '15 - Sum All Odd Fibonacci',
  run: sumOddFibonacci,
  cases: [
    { args: [1], expected: 2 },
    { args: [4], expected: 5 },
    { args: [10], expected: 10 },
    { args: [1000], expected: 1785 },
    { args: [4000000], expected: 4613732 }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
