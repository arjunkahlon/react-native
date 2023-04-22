import { createContext, ReactNode, useReducer } from "react";

import { Expense } from "../types/Expense";
import { DUMMY_EXPENSES } from "../data/dummy-expenses";

export const ExpensesContext = createContext({
  expenses: [] as Expense[],
  addExpense: ({description, amount, date}: Expense) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (id: string, {description, amount, date}: Expense) => {}
});

enum ExpenseActionKind {
  ADD = 'ADD',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE'
}

interface ExpensesAction {
  type: ExpenseActionKind;
  payload?: any
}

interface ExpensesState {
  expenses: Expense[]
}


function expensesReducer(state: ExpensesState, action: ExpensesAction) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state.expenses]
    case 'UPDATE':
      const updatableExpenseIndex = state.expenses.findIndex(
        (expense: Expense) => expense.id === action.payload.id);
      const updatableExpense = state.expenses[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data};
      const updatedExpenses = [...state.expenses];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.expenses.filter(
        (expense: Expense) => expense.id !== action.payload);
    default:
      return state;
  }
  
}

interface ExpenseContextProviderProps {
  children: ReactNode
}


function ExpensesContextProvider({children}: ExpenseContextProviderProps) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES as never);

  function addExpense(expense: Expense) {
    dispatch({type: ExpenseActionKind.ADD, payload: expense });
  }

  function deleteExpense(id: string) {
    dispatch({type: ExpenseActionKind.DELETE, payload: id})
  }

  function updateExpense(id: string, expense: Expense) {
    dispatch({type: ExpenseActionKind.UPDATE, payload: {id: id, data: expense }})
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider