'use strict';

// Small test harness shared by every exercise file.
//
// An exercise module looks like this:
//
//   module.exports = {
//     name: '03 - Factorialize',
//     run: factorialize,              // default function under test
//     cases: [
//       { args: [5], expected: 120 },
//       { fn: otherFunction, args: [3], expected: 6 }   // optional override
//     ]
//   };

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function format(value) {
  if (typeof value === 'function') return value.name || 'anonymous';
  return JSON.stringify(value);
}

function labelFor(testCase, fn) {
  const name = fn && fn.name ? fn.name : 'run';
  return `${name}(${testCase.args.map(format).join(', ')})`;
}

// Runs every case in a module and returns the counts plus the failures.
function runFile(mod) {
  const result = { passed: 0, failed: 0, failures: [] };

  for (const testCase of mod.cases) {
    const fn = testCase.fn || mod.run;
    let actual;
    let error = null;

    try {
      actual = fn(...testCase.args);
    } catch (thrown) {
      error = thrown;
    }

    const ok = !error && deepEqual(actual, testCase.expected);

    if (ok) {
      result.passed += 1;
    } else {
      result.failed += 1;
      result.failures.push({
        label: labelFor(testCase, fn),
        expected: testCase.expected,
        actual: error ? `threw ${error.message}` : actual
      });
    }
  }

  return result;
}

// Prints a readable report for a single exercise file.
function printReport(mod) {
  const result = runFile(mod);
  const total = result.passed + result.failed;

  console.log(`${mod.name}`);
  console.log(`  ${result.passed}/${total} cases passed`);

  for (const failure of result.failures) {
    console.log(`  FAIL ${failure.label}`);
    console.log(`       expected ${format(failure.expected)}`);
    console.log(`       actual   ${format(failure.actual)}`);
  }

  if (result.failed > 0) {
    process.exitCode = 1;
  }

  return result;
}

module.exports = { runFile, printReport, deepEqual, format };
