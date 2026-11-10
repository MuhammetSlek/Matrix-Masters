'use strict';

// Lecture 79 - Friday: Demo Algorithm Challenge
// The closing exercise asks for one solution that uses the earlier material
// together. This version analyses a sentence and reports four things about it:
//
//   wordCount    how many words it holds
//   longestWord  the longest word, ignoring punctuation
//   isPalindrome whether it reads the same backwards, ignoring case and spaces
//   titleCase    the sentence with the first letter of each word capitalised
//
// The individual helpers are written out again here rather than imported, so
// this file stands on its own.

function words(text) {
  return text.match(/[A-Za-z]+/g) || [];
}

function longestWord(text) {
  return words(text).reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ''
  );
}

function isPalindrome(text) {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

function titleCase(text) {
  return text
    .toLowerCase()
    .replace(/(^|[\s-])([a-z])/g, (match, separator, letter) => separator + letter.toUpperCase());
}

function analyzeText(text) {
  return {
    wordCount: words(text).length,
    longestWord: longestWord(text),
    isPalindrome: isPalindrome(text),
    titleCase: titleCase(text)
  };
}

module.exports = {
  name: '23 - Demo Algorithm Challenge',
  run: analyzeText,
  cases: [
    {
      args: ['A man a plan'],
      expected: {
        wordCount: 4,
        longestWord: 'plan',
        isPalindrome: false,
        titleCase: 'A Man A Plan'
      }
    },
    {
      args: ['A man, a plan, a canal: Panama'],
      expected: {
        wordCount: 7,
        longestWord: 'Panama',
        isPalindrome: true,
        titleCase: 'A Man, A Plan, A Canal: Panama'
      }
    }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
