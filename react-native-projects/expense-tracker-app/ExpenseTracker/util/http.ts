import axios from "axios";

import { Expense, ExpenseData } from "../types/Expense";

const BACKEND_URL = 'https://react-native-course-cee7f-default-rtdb.firebaseio.com'

export async function storeExpense(expenseData: ExpenseData) {
  const response = await axios.post(
    BACKEND_URL + '/expenses.json',
    expenseData,
    );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {  
   const response = await axios.get(
    BACKEND_URL + '/expenses.json'
  );

  const expenses: Expense[] = [];

  for (const key in response.data) {
    const expenseObj: Expense = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description
    };
    expenses.push(expenseObj);
  }

  return expenses;
}