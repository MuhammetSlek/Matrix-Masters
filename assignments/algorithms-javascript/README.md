# Algorithms Javascript

Course 7 in the Matrix Master MERN program. Twenty-three daily exercises, one file each.

Every exercise exports `cases` (inputs and expected outputs) so the whole set can be verified
in one command. No dependencies, no build step.

## Run everything

```bash
node assignments/algorithms-javascript/run-all.js
```

Output is one line per exercise and a total at the end. The process exits with code 1 if
anything fails, so it works in CI as-is.

## Run one exercise

```bash
node assignments/algorithms-javascript/04-palindrome-checker.js
```

## Exercises

| # | File | Lecture | Title |
|---|---|---|---|
| 01 | `01-js-basic.js` | 57 | Monday: JS Basic |
| 02 | `02-js-intermediate.js` | 58 | Tuesday: JS Intermediate |
| 03 | `03-factorialize.js` | 59 | Wednesday: Factorialize! |
| 04 | `04-palindrome-checker.js` | 60 | Thursday: Palindrome Checker |
| 05 | `05-third-highest.js` | 61 | Friday: 3rd Highest Number in Array |
| 06 | `06-largest-of-arrays.js` | 62 | Monday: Largest Number in Arrays |
| 07 | `07-longest-word.js` | 63 | Tuesday: Find the longest Word in a String |
| 08 | `08-title-case.js` | 64 | Wednesday: Title Case a Sentence |
| 09 | `09-sum-range.js` | 65 | Thursday: Sum All Numbers in a Range |
| 10 | `10-fibonacci-sequence.js` | 66 | Friday: Fibonacci Sequence |
| 11 | `11-game-of-3s.js` | 67 | Monday: Game of 3s |
| 12 | `12-magic-squares.js` | 68 | Tuesday: Magic Squares |
| 13 | `13-search-and-replace.js` | 69 | Wednesday: Search and Replace |
| 14 | `14-sum-primes.js` | 70 | Thursday: Sum All Primes |
| 15 | `15-sum-odd-fibonacci.js` | 71 | Friday: Sum All Odd Fibonacci |
| 16 | `16-bubble-sort.js` | 72 | Monday: Bubble Sort |
| 17 | `17-selection-sort.js` | 73 | Tuesday: Selection Sort |
| 18 | `18-factorial-recursive.js` | 74 | Monday: rFactorial vs iFactorial |
| 19 | `19-bunny-ears.js` | 75 | Tuesday: Bunny Ears |
| 20 | `20-power-n.js` | 76 | Wednesday: Power N |
| 21 | `21-fib-iterative-vs-recursive.js` | 77 | Thursday: iFib vs rFib |
| 22 | `22-recursive-triangle.js` | 78 | Friday: r Triangle |
| 23 | `23-demo-challenge.js` | 79 | Demo Algoithem Challenge |

## Notes on interpretation

The lecture videos contain the exact wording for each task. Where a title alone was not
specific enough, the file header states the rule that was implemented. Those are:

- `01`, `02` — warm-up sets, since "JS Basic" and "JS Intermediate" name a topic, not a task
- `11` — the Game of 3s rule is written out in the file header
- `12` — a magic square is defined as rows, columns and both diagonals summing equally,
  with all numbers distinct
- `23` — a combined challenge that reuses the functions from earlier exercises

Check those four against the videos first if anything is marked wrong.
