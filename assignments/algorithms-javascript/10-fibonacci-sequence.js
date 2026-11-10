'use strict';

// Lecture 66 - Friday: Fibonacci Sequence
// Returns the first n numbers of the sequence, starting at 0.
// fibonacciSequence(0) returns an empty array.

function fibonacciSequence(count) {
  const sequence = [];
  let previous = 0;
  let current = 1;

  for (let i = 0; i < count; i += 1) {
    sequence.push(previous);
    const next = previous + current;
    previous = current;
    current = next;
  }

  return sequence;
}

module.exports = {
  name: '10 - Fibonacci Sequence',
  run: fibonacciSequence,
  cases: [
    { args: [0], expected: [] },
    { args: [1], expected: [0] },
    { args: [2], expected: [0, 1] },
    { args: [5], expected: [0, 1, 1, 2, 3] },
    { args: [8], expected: [0, 1, 1, 2, 3, 5, 8, 13] }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
