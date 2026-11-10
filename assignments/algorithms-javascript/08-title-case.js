'use strict';

// Lecture 64 - Wednesday: Title Case a Sentence
// The first letter of every word is upper case, the rest is lower case.
// Words separated by a hyphen count separately; apostrophes are left alone
// so "i'm" becomes "I'm" and not "I'M".

function titleCase(sentence) {
  return sentence
    .toLowerCase()
    .replace(/(^|[\s-])([a-z])/g, (match, separator, letter) => separator + letter.toUpperCase());
}

module.exports = {
  name: '08 - Title Case',
  run: titleCase,
  cases: [
    { args: ["I'm a little tea pot"], expected: "I'm A Little Tea Pot" },
    { args: ['sHoRt AnD sToUt'], expected: 'Short And Stout' },
    { args: ['HERE IS MY HANDLE HERE IS MY SPOUT'], expected: 'Here Is My Handle Here Is My Spout' },
    { args: ['well-known problem'], expected: 'Well-Known Problem' },
    { args: [''], expected: '' }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
