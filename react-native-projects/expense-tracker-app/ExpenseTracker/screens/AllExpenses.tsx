import { useContext } from 'react';

import { ExpensesContext } from '../store/ExpensesContext';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

function AllExpenses() {
  const expensesContext = useContext(ExpensesContext)
  return <ExpensesOutput 
            expenses={expensesContext.expenses} 
            expensesPeriod='Total'
            fallbackText='No expenses found'
          />
}

export default AllExpenses;