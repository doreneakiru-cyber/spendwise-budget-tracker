// ==========================================
// SpendWise - JavaScript Foundation
// ==========================================

// 1. Declare Initial Application Data Variables
let totalBudget = 0;
let totalExpenses = 0;
let remainingBalance = 0;

// 2. Function to Collect User Input
function getBudgetInput() {
  let inputBudget = prompt("Enter your total monthly budget (KES):");
  let inputExpense1 = prompt("Enter your first expense amount (KES):");
  let inputExpense2 = prompt("Enter your second expense amount (KES):");

  // Convert inputs from strings to numbers
  totalBudget = parseFloat(inputBudget) || 0;
  let expense1 = parseFloat(inputExpense1) || 0;
  let expense2 = parseFloat(inputExpense2) || 0;

  // Calculate total expenses
  totalExpenses = expense1 + expense2;
}

// 3. Reusable Function for Calculating Remaining Balance
function calculateRemainingBalance(budget, expenses) {
  return budget - expenses;
}

// 4. Function to Display Results in the Console
function displaySummary() {
  remainingBalance = calculateRemainingBalance(totalBudget, totalExpenses);

  console.log("=== SPENDWISE BUDGET SUMMARY ===");
  console.log(`Total Budget: KES ${totalBudget.toFixed(2)}`);
  console.log(`Total Expenses: KES ${totalExpenses.toFixed(2)}`);
  console.log(`Remaining Balance: KES ${remainingBalance.toFixed(2)}`);

  if (remainingBalance < 0) {
    console.warn("Warning: You have exceeded your budget!");
  } else {
    console.log("Status: You are within your budget limits.");
  }
  console.log("================================");
}

// 5. Execute Functions
getBudgetInput();
displaySummary();