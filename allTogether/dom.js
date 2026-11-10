/* ==========================================================================
   Assignment 2 - DOM Manipulation
   Each button demonstrates one DOM technique: text, style, classes,
   creating elements, removing elements and building a list from data.
   ========================================================================== */

// ---- element references -------------------------------------------------
const greeting = document.getElementById('greeting');
const badgeBox = document.getElementById('badge-box');
const colorsList = document.getElementById('colors-list');
const log = document.getElementById('log');

const btnText = document.getElementById('btn-text');
const btnColor = document.getElementById('btn-color');
const btnAdd = document.getElementById('btn-add');
const btnRemove = document.getElementById('btn-remove');
const btnToggle = document.getElementById('btn-toggle');
const btnList = document.getElementById('btn-list');
const btnReset = document.getElementById('btn-reset');

// ---- helpers ------------------------------------------------------------
const greetingTexts = [
  'Hello, world!',
  'The DOM is just a tree of objects.',
  'JavaScript can change any of them.',
  'Including this sentence.'
];
let greetingIndex = 0;
let badgeCount = 1;

// writes a line into the log, newest at the top
function addLog(message) {
  const entry = document.createElement('li');
  const time = new Date().toLocaleTimeString();
  entry.textContent = `${time} — ${message}`;
  log.prepend(entry);
}

// a random colour from a list instead of a fully random one,
// so the text stays readable
const backgrounds = ['#e0f7ff', '#dcfce7', '#fef3c7', '#fce7f3', '#ede9fe', '#e2e8f0'];

// ---- 1. text content ----------------------------------------------------
btnText.addEventListener('click', () => {
  greetingIndex = (greetingIndex + 1) % greetingTexts.length;
  greeting.textContent = greetingTexts[greetingIndex];
  addLog(`textContent changed to "${greetingTexts[greetingIndex]}"`);
});

// ---- 2. inline style ----------------------------------------------------
btnColor.addEventListener('click', () => {
  const colour = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  greeting.style.backgroundColor = colour;
  greeting.style.borderColor = colour;
  addLog(`background colour set to ${colour}`);
});

// ---- 3. create and append elements -------------------------------------
btnAdd.addEventListener('click', () => {
  badgeCount += 1;

  const badge = document.createElement('span');
  badge.className = 'badge';
  badge.textContent = `badge ${badgeCount}`;

  badgeBox.appendChild(badge);
  addLog('appended a new <span class="badge">');
});

// ---- 4. remove elements -------------------------------------------------
btnRemove.addEventListener('click', () => {
  const badges = badgeBox.querySelectorAll('.badge');

  if (badges.length === 0) {
    addLog('nothing to remove');
    return;
  }

  const last = badges[badges.length - 1];
  last.remove();
  addLog('removed the last badge');
});

// ---- 5. classList.toggle ------------------------------------------------
btnToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  addLog(isDark ? 'dark-mode class added' : 'dark-mode class removed');
});

// ---- 6. build a list from an array -------------------------------------
const frameworkSteps = [
  'Select the container with querySelector',
  'Loop over the data',
  'Create an element for each item',
  'Set its text and append it'
];

btnList.addEventListener('click', () => {
  colorsList.innerHTML = ''; // clear first so the list does not grow forever

  frameworkSteps.forEach((step, index) => {
    const item = document.createElement('li');
    item.textContent = `${index + 1}. ${step}`;
    colorsList.appendChild(item);
  });

  addLog(`generated ${frameworkSteps.length} list items`);
});

// ---- 7. reset -----------------------------------------------------------
btnReset.addEventListener('click', () => {
  greeting.textContent = greetingTexts[0];
  greetingIndex = 0;
  greeting.style.backgroundColor = '';
  greeting.style.borderColor = '';

  document.body.classList.remove('dark-mode');

  badgeBox.innerHTML = '<span class="badge">starter</span>';
  badgeCount = 1;

  colorsList.innerHTML = '';
  log.innerHTML = '';
});
