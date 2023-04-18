import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { DUMMY_EXPENSES } from '../data/dummy-expenses';

function AllExpenses() {
  return <ExpensesOutput expenses={DUMMY_EXPENSES} expensesPeriod='Total'/>
}

export default AllExpenses;