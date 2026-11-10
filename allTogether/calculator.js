/* ==========================================================================
   Assignment 3 - The Calculator
   State machine: current number, previous number and the pending operator.
   ========================================================================== */

const screen = document.getElementById('calc-screen');
const historyEl = document.getElementById('calc-history');
const keypad = document.querySelector('.calc-keys');

// ---- state --------------------------------------------------------------
let current = '0';       // what the screen shows, kept as a string
let previous = null;     // the left-hand side of the pending operation
let operator = null;     // '+', '-', '*' or '/'
let waitingForOperand = false; // true right after an operator is pressed
let lastExpression = ''; // the "12 × 4 =" line shown above the result

const OP_SYMBOLS = { '+': '+', '-': '−', '*': '×', '/': '÷' };
const MAX_DIGITS = 12;

// ---- formatting ---------------------------------------------------------
// 1234567 -> "1,234,567" while keeping any decimals untouched
function formatNumber(value) {
  if (value === 'Error') return 'Error';

  const [whole, decimals] = String(value).split('.');
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return decimals !== undefined ? `${grouped}.${decimals}` : grouped;
}

// 0.1 + 0.2 should show 0.3, not 0.30000000000000004
function round(value) {
  return Math.round(value * 1e10) / 1e10;
}

function updateScreen() {
  screen.textContent = formatNumber(current);

  if (previous !== null && operator !== null) {
    historyEl.textContent = `${formatNumber(previous)} ${OP_SYMBOLS[operator]}`;
  } else if (lastExpression) {
    historyEl.textContent = lastExpression;
  } else {
    historyEl.textContent = '\u00A0'; // keeps the line height stable
  }
}

// ---- input --------------------------------------------------------------
function inputDigit(digit) {
  if (current === 'Error') clearAll();
  lastExpression = '';

  if (waitingForOperand) {
    current = digit;
    waitingForOperand = false;
    updateScreen();
    return;
  }

  if (current === '0') {
    current = digit;
  } else if (current.replace('-', '').replace('.', '').length < MAX_DIGITS) {
    current += digit;
  }

  updateScreen();
}

function inputDecimal() {
  if (current === 'Error') clearAll();
  lastExpression = '';

  if (waitingForOperand) {
    current = '0.';
    waitingForOperand = false;
    updateScreen();
    return;
  }

  if (!current.includes('.')) {
    current += '.';
    updateScreen();
  }
}

// ---- operations ---------------------------------------------------------
function chooseOperator(nextOperator) {
  if (current === 'Error') return;
  lastExpression = '';

  // pressing two operators in a row just swaps the operator
  if (operator !== null && waitingForOperand) {
    operator = nextOperator;
    updateScreen();
    return;
  }

  // chained calculation: 2 + 3 + should resolve 2 + 3 first
  if (operator !== null) {
    evaluate();
  }

  previous = Number(current);
  operator = nextOperator;
  waitingForOperand = true;
  updateScreen();
}

function evaluate() {
  if (operator === null || previous === null) return;

  const left = previous;
  const right = Number(current);
  let result;

  switch (operator) {
    case '+': result = left + right; break;
    case '-': result = left - right; break;
    case '*': result = left * right; break;
    case '/': result = right === 0 ? 'Error' : left / right; break;
    default: return;
  }

  if (result !== 'Error') result = round(result);

  lastExpression = `${formatNumber(left)} ${OP_SYMBOLS[operator]} ${formatNumber(right)} =`;
  current = String(result);
  previous = null;
  operator = null;
  waitingForOperand = true;

  updateScreen();
}

function applyPercent() {
  if (current === 'Error') return;

  current = String(round(Number(current) / 100));
  waitingForOperand = true;
  updateScreen();
}

function backspace() {
  if (current === 'Error') {
    clearAll();
    return;
  }
  if (waitingForOperand) return;

  if (current.length <= 1 || (current.length === 2 && current.startsWith('-'))) {
    current = '0';
  } else {
    current = current.slice(0, -1);
  }

  updateScreen();
}

function clearAll() {
  current = '0';
  previous = null;
  operator = null;
  waitingForOperand = false;
  lastExpression = '';
  updateScreen();
}

// ---- wiring -------------------------------------------------------------
function handleButton(button) {
  const { digit, op } = button.dataset;

  if (digit !== undefined) return inputDigit(digit);
  if (op) return chooseOperator(op);

  switch (button.dataset.action) {
    case 'decimal':   return inputDecimal();
    case 'equals':    return evaluate();
    case 'percent':   return applyPercent();
    case 'backspace': return backspace();
    case 'clear':     return clearAll();
  }
}

// one delegated listener for the whole keypad
keypad.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (button) handleButton(button);
});

// keyboard support
document.addEventListener('keydown', (event) => {
  const { key } = event;

  if (/^\d$/.test(key)) return inputDigit(key);
  if (key === '.' || key === ',') return inputDecimal();
  if (['+', '-', '*', '/'].includes(key)) return chooseOperator(key);
  if (key === '%') return applyPercent();
  if (key === 'Backspace') { event.preventDefault(); return backspace(); }
  if (key === 'Escape') return clearAll();

  if (key === 'Enter' || key === '=') {
    event.preventDefault();
    evaluate();
  }
});

updateScreen();
