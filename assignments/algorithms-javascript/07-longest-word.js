'use strict';

// Lecture 63 - Tuesday: Find the longest Word in a String
// Punctuation is ignored. On a tie the first word wins.

function longestWord(text) {
  const words = text.match(/[A-Za-z]+/g) || [];
  let longest = '';

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

module.exports = {
  name: '07 - Longest Word',
  run: longestWord,
  cases: [
    { args: ['The quick brown fox jumped over the lazy dog'], expected: 'jumped' },
    { args: ['May the force be with you'], expected: 'force' },
    { args: ['Google do a barrel roll'], expected: 'Google' },
    { args: ['a bb cc'], expected: 'bb' },
    { args: ['...'], expected: '' }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
