import { Text, FlatList } from "react-native";

import ExpenseItem from "./ExpenseItem";
import { Expense } from "../../types/Expense";

interface ExpensesListProps {
  expenses: Expense[]
}

function renderExpenseItem(item: Expense) {
  return <ExpenseItem {...item} />
}

function ExpensesList({ expenses }: ExpensesListProps) {
  return <FlatList data={expenses} 
                   renderItem={(itemData) => renderExpenseItem(itemData.item)}
                   keyExtractor={(item) => item.id}
          />
}

export default ExpensesList;