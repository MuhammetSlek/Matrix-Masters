'use strict';

// Lecture 68 - Tuesday: Magic Squares
// A square grid is magic when every row, every column and both diagonals add
// up to the same total, and every number in the grid is distinct.
// The grid may be any size, not only 3x3.

function isMagicSquare(grid) {
  const size = grid.length;

  if (size === 0) return false;
  if (grid.some((row) => row.length !== size)) return false;

  const flat = grid.flat();
  if (new Set(flat).size !== flat.length) return false;

  const target = grid[0].reduce((total, value) => total + value, 0);

  for (const row of grid) {
    if (row.reduce((total, value) => total + value, 0) !== target) return false;
  }

  for (let column = 0; column < size; column += 1) {
    let total = 0;
    for (let row = 0; row < size; row += 1) {
      total += grid[row][column];
    }
    if (total !== target) return false;
  }

  let diagonalLeft = 0;
  let diagonalRight = 0;
  for (let i = 0; i < size; i += 1) {
    diagonalLeft += grid[i][i];
    diagonalRight += grid[i][size - 1 - i];
  }

  return diagonalLeft === target && diagonalRight === target;
}

module.exports = {
  name: '12 - Magic Squares',
  run: isMagicSquare,
  cases: [
    { args: [[[2, 7, 6], [9, 5, 1], [4, 3, 8]]], expected: true },
    { args: [[[8, 1, 6], [3, 5, 7], [4, 9, 2]]], expected: true },
    { args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]], expected: false },
    { args: [[[1, 1], [1, 1]]], expected: false },
    { args: [[[1, 2], [3]]], expected: false }
  ]
};

if (require.main === module) {
  require('./lib/harness').printReport(module.exports);
}
