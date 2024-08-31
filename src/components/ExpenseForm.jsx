import { useState } from 'react';

function ExpenseForm({ addExpense }) {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [expenseCategory, setExpenseCategory] = useState('');

  const handleNameChange = (event) => {
    setExpenseName(event.target.value);
  };

  const handleAmountChange = (event) => {
    setExpenseAmount(parseFloat(event.target.value));
  };

  const handleCategoryChange = (event) => {
    setExpenseCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!expenseName || !expenseAmount) return;

    addExpense({ name: expenseName, amount: expenseAmount, category: expenseCategory });

    setExpenseName('');
    setExpenseAmount('');
    setExpenseCategory('');
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Expense Name:
          <input type="text" value={expenseName} onChange={handleNameChange} />
        </label>
        <label>
          Amount:
          <input type="number" value={expenseAmount} onChange={handleAmountChange} />
        </label>
        <label>
          Category:
          <select value={expenseCategory} onChange={handleCategoryChange}>
            <option value="">-- Select Category --</option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Transport">Transport</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;