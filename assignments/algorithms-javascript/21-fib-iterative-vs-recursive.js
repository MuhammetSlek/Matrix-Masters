'use strict';

// Lecture 77 - Thursday: iFib vs rFib
// The same Fibonacci number computed iteratively and recursively, so the two
// approaches can be compared. The recursive version is deliberately left
// unmemoised: that contrast is the point of the lecture.

function fibIterative(n) {
  let previous = 0;
  let current = 1;

  for (let i = 0; i < n; i += 1) {
    const next = previous + current;
    previous = current;
    current = next;
  }

  return previous;
}

function fibRecursive(n) {
  if (n < 2) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

function compare(n) {
  return {
    iterative: fibIterative(n),
    recursive: fibRecursive(n)
  };
}

module.exports = {
  name: '21 - iFib vs rFib',
  run: compare,
  cases: [
    { args: [0], expected: { iterative: 0, recursive: 0 } },
    { args: [1], expected: { iterative: 1, recursive: 1 } },
    { args: [10], expected: { iterative: 55, recursive: 55 } },
    { args: [15], expected: { iterative: 610, recursive: 610 } },
    { fn: fibIterative, args: [20], expected: 6765 },
    { fn: fibRecursive, args: [20], expected: 6765 }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
