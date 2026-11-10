'use strict';

// Lecture 69 - Wednesday: Search and Replace
// Replaces the first matching word and keeps the capitalisation of the
// original: "Sleeping" replaced by "sitting" becomes "Sitting".

function searchAndReplace(sentence, before, after) {
  const index = sentence.toLowerCase().indexOf(before.toLowerCase());
  if (index === -1) return sentence;

  const original = sentence.slice(index, index + before.length);
  const startsUpperCase = original[0] === original[0].toUpperCase();
  const replacement = startsUpperCase
    ? after[0].toUpperCase() + after.slice(1)
    : after;

  return sentence.slice(0, index) + replacement + sentence.slice(index + before.length);
}

module.exports = {
  name: '13 - Search and Replace',
  run: searchAndReplace,
  cases: [
    { args: ['Let us go to the store', 'store', 'mall'], expected: 'Let us go to the mall' },
    { args: ['He is Sleeping on the couch', 'Sleeping', 'sitting'], expected: 'He is Sitting on the couch' },
    { args: ['This has a spellngi error', 'spellngi', 'spelling'], expected: 'This has a spelling error' },
    { args: ['His name is Tom', 'tom', 'john'], expected: 'His name is John' },
    { args: ['Nothing to change here', 'zzz', 'aaa'], expected: 'Nothing to change here' }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
