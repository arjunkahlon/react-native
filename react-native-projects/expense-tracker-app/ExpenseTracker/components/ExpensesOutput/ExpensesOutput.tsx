import { View } from 'react-native'

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

type Expense = {
  amount: number,
  description: string,
  date: Date
}

interface ExpeseOutputProps {
  expenses: Expense[],
  expensesPeriod: string
}

function ExpensesOutput( { expenses, expensesPeriod }: ExpeseOutputProps) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
      <ExpensesList />
    </View>

  )
}

export default ExpensesOutput;