import { View } from 'react-native'

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

import { Expense } from '../../types/Expense';


interface ExpeseOutputProps {
  expenses: Expense[],
  expensesPeriod: string
}

function ExpensesOutput( { expenses, expensesPeriod }: ExpeseOutputProps) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
      <ExpensesList expenses={expenses} />
    </View>

  )
}

export default ExpensesOutput;