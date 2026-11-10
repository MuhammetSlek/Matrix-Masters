'use strict';

// Lecture 72 - Monday: Bubble Sort
// Sorts a copy of the array and leaves the original untouched.
// The swapped flag ends the loop early when the array is already sorted.

function bubbleSort(numbers) {
  const sorted = [...numbers];
  const length = sorted.length;

  for (let pass = 0; pass < length - 1; pass += 1) {
    let swapped = false;

    for (let i = 0; i < length - 1 - pass; i += 1) {
      if (sorted[i] > sorted[i + 1]) {
        const temp = sorted[i];
        sorted[i] = sorted[i + 1];
        sorted[i + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return sorted;
}

function inputSurvivesSort(numbers) {
  bubbleSort(numbers);
  return numbers;
}

module.exports = {
  name: '16 - Bubble Sort',
  run: bubbleSort,
  cases: [
    { args: [[5, 1, 4, 2, 8]], expected: [1, 2, 4, 5, 8] },
    { args: [[3, 3, 1]], expected: [1, 3, 3] },
    { args: [[]], expected: [] },
    { args: [[1]], expected: [1] },
    { args: [[-2, 7, 0, -9]], expected: [-9, -2, 0, 7] },
    { fn: inputSurvivesSort, args: [[3, 1, 2]], expected: [3, 1, 2] }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
