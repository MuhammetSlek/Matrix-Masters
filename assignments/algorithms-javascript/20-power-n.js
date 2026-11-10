'use strict';

// Lecture 76 - Wednesday: Power N
// Recursive exponentiation. A negative exponent returns the reciprocal,
// so power(2, -2) is 0.25.

function power(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent < 0) return 1 / power(base, -exponent);
  return base * power(base, exponent - 1);
}

module.exports = {
  name: '20 - Power N',
  run: power,
  cases: [
    { args: [2, 3], expected: 8 },
    { args: [5, 0], expected: 1 },
    { args: [1, 100], expected: 1 },
    { args: [2, -2], expected: 0.25 },
    { args: [10, 4], expected: 10000 }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
