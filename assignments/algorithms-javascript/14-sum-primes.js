'use strict';

// Lecture 70 - Thursday: Sum All Primes
// Adds every prime number less than or equal to the given limit.
// Uses a sieve, so 977 is instant.

function sumPrimes(limit) {
  if (!Number.isInteger(limit) || limit < 2) return 0;

  const isPrime = new Array(limit + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= limit; i += 1) {
    if (!isPrime[i]) continue;
    for (let multiple = i * i; multiple <= limit; multiple += i) {
      isPrime[multiple] = false;
    }
  }

  let total = 0;
  for (let i = 2; i <= limit; i += 1) {
    if (isPrime[i]) total += i;
  }
  return total;
}

module.exports = {
  name: '14 - Sum All Primes',
  run: sumPrimes,
  cases: [
    { args: [1], expected: 0 },
    { args: [2], expected: 2 },
    { args: [10], expected: 17 },
    { args: [20], expected: 77 },
    { args: [977], expected: 73156 }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
