'use strict';

// Lecture 57 - Monday: JS Basic
// The lecture title names a topic rather than a single task, so this file covers
// the four fundamentals it opens with: arithmetic, conditionals, comparison and strings.

function sum(a, b) {
  return a + b;
}

function isEven(number) {
  return number % 2 === 0;
}

function maxOfThree(a, b, c) {
  return Math.max(a, b, c);
}

function reverseString(text) {
  return text.split('').reverse().join('');
}

module.exports = {
  name: '01 - JS Basic',
  cases: [
    { fn: sum, args: [2, 3], expected: 5 },
    { fn: sum, args: [-4, 4], expected: 0 },
    { fn: isEven, args: [10], expected: true },
    { fn: isEven, args: [7], expected: false },
    { fn: isEven, args: [0], expected: true },
    { fn: maxOfThree, args: [3, 9, 5], expected: 9 },
    { fn: maxOfThree, args: [-1, -5, -3], expected: -1 },
    { fn: maxOfThree, args: [4, 4, 4], expected: 4 },
    { fn: reverseString, args: ['hello'], expected: 'olleh' },
    { fn: reverseString, args: [''], expected: '' }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
