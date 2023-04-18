import { View, StyleSheet } from 'react-native'

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

import { Expense } from '../../types/Expense';
import { GlobalStyles } from '../../constants/styles';


interface ExpeseOutputProps {
  expenses: Expense[],
  expensesPeriod: string
}

function ExpensesOutput( { expenses, expensesPeriod }: ExpeseOutputProps) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
      <ExpensesList expenses={expenses} />
    </View>

  )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  }
})