'use strict';

// Lecture 67 - Monday: Game of 3s
// The lecture title does not describe the rule, so this is the version
// implemented here:
//
//   Starting from n, repeat until the value is 1:
//     - if the value is divisible by 3, divide it by 3
//     - otherwise subtract 1
//   Return the number of steps taken.
//
//   Example: 10 -> 9 -> 3 -> 1  is 3 steps.
//
// Check this against the video before submitting.

function gameOfThrees(start) {
  if (!Number.isInteger(start) || start < 0) {
    throw new RangeError('gameOfThrees expects a non-negative integer');
  }

  let value = start;
  let steps = 0;

  while (value > 1) {
    if (value % 3 === 0) {
      value /= 3;
    } else {
      value -= 1;
    }
    steps += 1;
  }

  return steps;
}

module.exports = {
  name: '11 - Game of 3s',
  run: gameOfThrees,
  cases: [
    { args: [0], expected: 0 },
    { args: [1], expected: 0 },
    { args: [3], expected: 1 },
    { args: [6], expected: 2 },
    { args: [10], expected: 3 },
    { args: [12], expected: 3 },
    { args: [27], expected: 3 }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
