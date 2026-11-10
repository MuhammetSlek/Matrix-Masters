'use strict';

// Lecture 75 - Tuesday: Bunny Ears
// Recursion practice. Each bunny has 2 ears, so the answer is 2 * number,
// but the exercise is to get there by recursing one bunny at a time.
//
// bunnyEarsOdd follows the second half of the usual task: bunnies standing in
// a line where the odd-numbered ones (1st, 3rd, 5th ...) have 3 ears.

function bunnyEars(count) {
  if (count <= 0) return 0;
  return 2 + bunnyEars(count - 1);
}

function bunnyEarsOdd(count) {
  if (count <= 0) return 0;
  const ears = count % 2 === 1 ? 3 : 2;
  return ears + bunnyEarsOdd(count - 1);
}

module.exports = {
  name: '19 - Bunny Ears',
  run: bunnyEars,
  cases: [
    { args: [0], expected: 0 },
    { args: [1], expected: 2 },
    { args: [2], expected: 4 },
    { args: [5], expected: 10 },
    { fn: bunnyEarsOdd, args: [0], expected: 0 },
    { fn: bunnyEarsOdd, args: [1], expected: 3 },
    { fn: bunnyEarsOdd, args: [2], expected: 5 },
    { fn: bunnyEarsOdd, args: [3], expected: 8 }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
