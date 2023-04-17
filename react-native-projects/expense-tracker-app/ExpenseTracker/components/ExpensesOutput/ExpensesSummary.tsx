import { View, Text } from 'react-native';

type Expense = {
  amount: number,
  description: string,
  date: Date
}

interface ExpensesSummaryProps {
  expenses: Expense[],
  periodName: string,
}

function ExpensesSummary({expenses, periodName}: ExpensesSummaryProps) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount
  }, 0);
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum}.toFixed(2)</Text>
    </View>
  );
}

export default ExpensesSummary;