import { View, Text, StyleSheet } from 'react-native'

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

import { Expense } from '../../types/Expense';
import { GlobalStyles } from '../../constants/styles';


interface ExpeseOutputProps {
  expenses: Expense[],
  expensesPeriod: string,
  fallbackText: string
}

function ExpensesOutput( { expenses, expensesPeriod, fallbackText }: ExpeseOutputProps) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;

  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
      {content}
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
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32
  }
})