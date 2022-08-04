import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterYearHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onFilterYearChange={filterYearHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
