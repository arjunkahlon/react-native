import { Text, FlatList } from "react-native";

import { Expense } from "../../types/Expense";

interface ExpensesListProps {
  expenses: Expense[]
}

function renderExpenseItem(item: Expense) {
  return <Text>{item.description}</Text>
}

function ExpensesList({ expenses }: ExpensesListProps) {
  return <FlatList data={expenses} 
                   renderItem={(itemData) => renderExpenseItem(itemData.item)}
                   keyExtractor={(item) => item.id}
          />
}

export default ExpensesList;