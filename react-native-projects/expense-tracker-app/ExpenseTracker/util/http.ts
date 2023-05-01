import axios from "axios";

import { ExpenseData } from "../types/Expense";

export function storeExpense(expenseData: ExpenseData) {
  axios.post(
    'https://react-native-course-cee7f-default-rtdb.firebaseio.com/expenses.json',
    expenseData,
    );
}