import { useState } from 'react';

function ExpenseList({ expenses }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.category === selectedCategory || selectedCategory === ''
  );

  return (
    <div>
      <h2>Expense List</h2>
      <label htmlFor="filter-category">Filter by category:</label>
      <select id="filter-category" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Transport">Transport</option>
        <option value="Other">Other</option>
      </select>
      <ul>
        {filteredExpenses.map((expense, index) => (
          <li key={index}>
            {expense.name} - ${expense.amount} - {expense.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;