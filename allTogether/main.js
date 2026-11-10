/* ==========================================================================
   Assignment 1 - Bring everything together
   A small task board: data (arrays + objects), functions, DOM and events.
   Tasks are saved in localStorage so a refresh does not lose them.
   ========================================================================== */

const STORAGE_KEY = 'matrix-task-board';

// ---- element references -------------------------------------------------
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const prioritySelect = document.getElementById('task-priority');
const list = document.getElementById('task-list');
const counter = document.getElementById('task-counter');
const emptyState = document.getElementById('empty-state');
const clearDoneBtn = document.getElementById('clear-done');
const filterButtons = document.querySelectorAll('[data-filter]');

// ---- state --------------------------------------------------------------
let tasks = [];
let activeFilter = 'all'; // 'all' | 'active' | 'done'

// ---- persistence --------------------------------------------------------
function loadTasks() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    tasks = Array.isArray(stored) ? stored : [];
  } catch (error) {
    // bad or missing data should never break the page
    console.warn('Could not read saved tasks:', error);
    tasks = [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// ---- data operations ----------------------------------------------------
// Date.now() alone can collide when two tasks are added in the same
// millisecond, so a random suffix keeps the ids unique.
function createId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function addTask(title, priority) {
  tasks.push({
    id: createId(),
    title: title.trim(),
    priority,
    done: false,
    createdAt: new Date().toISOString()
  });
}

function toggleTask(id) {
  const task = tasks.find((item) => item.id === id);
  if (task) {
    task.done = !task.done;
  }
}

function deleteTask(id) {
  tasks = tasks.filter((item) => item.id !== id);
}

function clearCompleted() {
  tasks = tasks.filter((item) => !item.done);
}

function getVisibleTasks() {
  if (activeFilter === 'active') return tasks.filter((task) => !task.done);
  if (activeFilter === 'done') return tasks.filter((task) => task.done);
  return tasks;
}

// ---- rendering ----------------------------------------------------------
function buildTaskElement(task) {
  const item = document.createElement('li');
  item.className = task.done ? 'task done' : 'task';
  item.dataset.id = task.id;
  item.dataset.priority = task.priority;

  // coloured priority dot
  const dot = document.createElement('span');
  dot.className = 'dot';

  // the task text
  const title = document.createElement('span');
  title.className = 'title';
  title.textContent = task.title;

  // action buttons
  const actions = document.createElement('div');
  actions.className = 'actions';

  const toggleButton = document.createElement('button');
  toggleButton.type = 'button';
  toggleButton.dataset.action = 'toggle';
  toggleButton.textContent = task.done ? 'Undo' : 'Done';

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.dataset.action = 'delete';
  deleteButton.textContent = 'Delete';

  actions.append(toggleButton, deleteButton);
  item.append(dot, title, actions);

  return item;
}

function render() {
  const visible = getVisibleTasks();

  list.innerHTML = '';
  visible.forEach((task) => list.appendChild(buildTaskElement(task)));

  // empty state
  const isEmpty = visible.length === 0;
  emptyState.classList.toggle('hidden', !isEmpty);
  emptyState.textContent =
    tasks.length === 0
      ? 'No tasks yet — add one above.'
      : 'Nothing matches this filter.';

  // counters
  const doneCount = tasks.filter((task) => task.done).length;
  counter.textContent =
    tasks.length === 1
      ? `1 task · ${doneCount} done`
      : `${tasks.length} tasks · ${doneCount} done`;

  clearDoneBtn.disabled = doneCount === 0;
}

// ---- events -------------------------------------------------------------
form.addEventListener('submit', (event) => {
  event.preventDefault(); // keep the page from reloading

  const title = input.value.trim();
  if (!title) return;

  addTask(title, prioritySelect.value);
  saveTasks();
  render();

  input.value = '';
  input.focus();
});

// one listener for the whole list instead of one per button
list.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;

  const id = button.closest('.task').dataset.id;

  if (button.dataset.action === 'toggle') toggleTask(id);
  if (button.dataset.action === 'delete') deleteTask(id);

  saveTasks();
  render();
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((other) => other.classList.remove('active'));
    button.classList.add('active');

    render();
  });
});

clearDoneBtn.addEventListener('click', () => {
  clearCompleted();
  saveTasks();
  render();
});

// ---- start --------------------------------------------------------------
loadTasks();
render();
