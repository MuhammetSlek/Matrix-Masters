'use strict';

// Lecture 73 - Tuesday: Selection Sort
// Repeatedly picks the smallest remaining value and moves it to the front.
// Sorts a copy, so the caller's array is not changed.

function selectionSort(numbers) {
  const sorted = [...numbers];

  for (let start = 0; start < sorted.length - 1; start += 1) {
    let smallest = start;

    for (let i = start + 1; i < sorted.length; i += 1) {
      if (sorted[i] < sorted[smallest]) {
        smallest = i;
      }
    }

    if (smallest !== start) {
      const temp = sorted[start];
      sorted[start] = sorted[smallest];
      sorted[smallest] = temp;
    }
  }

  return sorted;
}

function inputSurvivesSort(numbers) {
  selectionSort(numbers);
  return numbers;
}

module.exports = {
  name: '17 - Selection Sort',
  run: selectionSort,
  cases: [
    { args: [[64, 25, 12, 22, 11]], expected: [11, 12, 22, 25, 64] },
    { args: [[4, 4, 2, 9]], expected: [2, 4, 4, 9] },
    { args: [[]], expected: [] },
    { args: [[7]], expected: [7] },
    { fn: inputSurvivesSort, args: [[3, 1, 2]], expected: [3, 1, 2] }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
