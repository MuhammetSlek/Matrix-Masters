'use strict';

// Lecture 60 - Thursday: Palindrome Checker
// Case, spaces and punctuation are ignored before comparing the string
// with its reverse.

function clean(text) {
  return text.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function isPalindrome(text) {
  const cleaned = clean(text);
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

module.exports = {
  name: '04 - Palindrome Checker',
  run: isPalindrome,
  cases: [
    { args: ['racecar'], expected: true },
    { args: ['hello'], expected: false },
    { args: ['A man, a plan, a canal: Panama'], expected: true },
    { args: ['Never odd or even'], expected: true },
    { args: ['12321'], expected: true },
    { args: ['12345'], expected: false },
    { args: [''], expected: true }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
