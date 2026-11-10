'use strict';

// Lecture 74 - Monday: rFactorial vs iFactorial
// The same result written two ways: a loop and a recursive call.
// Both are exported so the two can be compared directly.

function factorialIterative(number) {
  if (!Number.isInteger(number) || number < 0) {
    throw new RangeError('factorialIterative expects a non-negative integer');
  }

  let result = 1;
  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }
  return result;
}

function factorialRecursive(number) {
  if (!Number.isInteger(number) || number < 0) {
    throw new RangeError('factorialRecursive expects a non-negative integer');
  }

  return number <= 1 ? 1 : number * factorialRecursive(number - 1);
}

function compare(number) {
  return {
    iterative: factorialIterative(number),
    recursive: factorialRecursive(number)
  };
}

module.exports = {
  name: '18 - rFactorial vs iFactorial',
  run: compare,
  cases: [
    { args: [0], expected: { iterative: 1, recursive: 1 } },
    { args: [1], expected: { iterative: 1, recursive: 1 } },
    { args: [5], expected: { iterative: 120, recursive: 120 } },
    { args: [10], expected: { iterative: 3628800, recursive: 3628800 } },
    { fn: factorialIterative, args: [7], expected: 5040 },
    { fn: factorialRecursive, args: [7], expected: 5040 }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
