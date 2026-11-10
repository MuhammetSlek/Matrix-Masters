'use strict';

// Lecture 58 - Tuesday: JS Intermediate
// Topic-level title, so these are the four intermediate string and array
// operations the lecture builds on.

function countVowels(text) {
  const matches = text.toLowerCase().match(/[aeiou]/g);
  return matches ? matches.length : 0;
}

function sumArray(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

function removeDuplicates(items) {
  return [...new Set(items)];
}

function capitalizeWords(text) {
  return text
    .split(' ')
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ');
}

module.exports = {
  name: '02 - JS Intermediate',
  cases: [
    { fn: countVowels, args: ['JavaScript'], expected: 3 },
    { fn: countVowels, args: ['rhythm'], expected: 0 },
    { fn: sumArray, args: [[1, 2, 3, 4]], expected: 10 },
    { fn: sumArray, args: [[]], expected: 0 },
    { fn: removeDuplicates, args: [[1, 2, 2, 3, 1]], expected: [1, 2, 3] },
    { fn: removeDuplicates, args: [['a', 'b', 'a']], expected: ['a', 'b'] },
    { fn: capitalizeWords, args: ['hello world'], expected: 'Hello World' },
    { fn: capitalizeWords, args: ['the quick brown fox'], expected: 'The Quick Brown Fox' }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
