// --- 1. Global State Variables ---
let totalBudget = 0;
let expenses = []; // Array of expense objects: { name, amount, category }

// --- 2. Helper Functions (Pure Logic & Formatting) ---
function formatCurrency(amount) {
  return `$${Number(amount).toFixed(2)}`;
}

function calculateTotalExpenses() {
  return expenses.reduce((sum, item) => sum + item.amount, 0);
}

function calculateRemainingBalance() {
  return totalBudget - calculateTotalExpenses();
}

// --- 3. DOM Manipulation Functions ---

// Renders the list of expenses inside the HTML using a loop
function renderExpenseList() {
  const listContainer = document.getElementById('expense-list-container');
  listContainer.innerHTML = ''; // Clear existing content

  if (expenses.length === 0) {
    listContainer.innerHTML = '