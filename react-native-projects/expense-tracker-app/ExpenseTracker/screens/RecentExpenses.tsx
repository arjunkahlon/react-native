import { useContext, useEffect } from 'react';

import { ExpensesContext } from '../store/ExpensesContext';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';

function RecentExpenses() {
  const expensesContext = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
    }
  }, []);

  const recentExpenses = expensesContext.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return (expense.date >= date7DaysAgo) && (expense.date <= today);
  })
  return <ExpensesOutput expenses={recentExpenses} 
                         expensesPeriod='Last 7 Days' 
                         fallbackText='No expenses in last 7 days'
          />
}

export default RecentExpenses;