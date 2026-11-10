'use strict';

// Runs every NN-*.js exercise in this folder and prints a summary.
// Usage: node assignments/algorithms-javascript/run-all.js

const fs = require('fs');
const path = require('path');
const { runFile, format } = require('./lib/harness');

const files = fs
  .readdirSync(__dirname)
  .filter((file) => /^\d{2}-.+\.js$/.test(file))
  .sort();

let totalPassed = 0;
let totalFailed = 0;
let exercises = 0;

for (const file of files) {
  const mod = require(path.join(__dirname, file));
  const result = runFile(mod);
  const total = result.passed + result.failed;

  exercises += 1;
  totalPassed += result.passed;
  totalFailed += result.failed;

  const status = result.failed === 0 ? 'PASS' : 'FAIL';
  console.log(`${status}  ${mod.name.padEnd(46)} ${result.passed}/${total}`);

  for (const failure of result.failures) {
    console.log(`        ${failure.label}`);
    console.log(`          expected ${format(failure.expected)}`);
    console.log(`          actual   ${format(failure.actual)}`);
  }
}

const totalCases = totalPassed + totalFailed;
console.log('');
console.log(`${totalPassed}/${totalCases} cases passed across ${exercises} exercises`);

if (totalFailed > 0) {
  process.exitCode = 1;
}
