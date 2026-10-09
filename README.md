# Budget Tracker - SpendWise

This project is an upgraded version of the SpendWise Budget Tracker built using HTML5 and CSS3.

## Features Added in Week 2

1. **Expense Table:** Replaced placeholder text with a structured table featuring `<thead>`, `<tbody>`, `<th>`, and `<td>` elements, styled with alternating row colors and hover effects.
2. **Upgraded Form:** Wrapped inputs inside a `<form>` tag, added a `<select>` dropdown with 5 categories (*Food, Transport, Rent, Entertainment, Other*), and ensured all input fields carry matching IDs.
3. **Multimedia Content:** Included an header logo using `<img>` and embedded an informative video using an `<iframe>`.
4. **Interactive Details Component:** Included a collapsible `<details>` / `<summary>` section to guide users on how to use the app.
5. **Advanced CSS Selectors:** Used descendant selectors (`.expenses-section td`), direct child selectors (`.add-expense-section > form`), positional pseudo-classes (`tr:nth-child(even)`), negation pseudo-classes (`input:not([type="date"])`), and focus pseudo-classes (`input:focus`).
# SpendWise - Budget Tracker

## Overview
SpendWise is a personal finance application designed to help users log income, track monthly expenses, and calculate remaining balances.

## JavaScript Concepts Implemented
- **Variables & Data Types**: Stored numerical tracking figures using `let` (`totalBudget`, `totalExpenses`, `remainingBalance`).
- **User Input**: Collected interactive inputs via browser `prompt()` dialogs and converted string inputs to floating-point numbers using `parseFloat()`.
- **Calculations**: Summed multi-item expenses and computed the remaining balance (`totalBudget - totalExpenses`).
- **Functions**: Organized application logic into clean, reusable functions (`getBudgetInput`, `calculateRemainingBalance`, `displaySummary`).
- **Console Display**: Outputted structured financial reports and alerts directly in the browser developer console using `console.log()` and `console.warn()`.

## How to Run
1. Open `index.html` in any web browser.
2. Enter your budget and expense values into the popup prompt dialogs.
3. Open the developer console (Right-Click -> **Inspect** -> **Console** or press **F12**) to view your calculated budget summary.