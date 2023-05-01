import { createContext, ReactNode, useReducer } from "react";

import { Expense, ExpenseData } from "../types/Expense";


export const ExpensesContext = createContext({
  expenses: [] as Expense[],
  addExpense: ({description, amount, date, id}: Expense) => {},
  setExpenses: (expenses: Expense[]) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (id: string, {description, amount, date}: ExpenseData) => {}
});

enum ExpenseActionKind {
  ADD = 'ADD',
  SET = 'SET',
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


function expensesReducer(state: Expense[], action: ExpensesAction) {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];
    case 'SET':
      const inverted = action.payload.reverse();
      return inverted;
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense: Expense) => expense.id === action.payload.id);
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data};
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
  
}

interface ExpenseContextProviderProps {
  children: ReactNode
}


function ExpensesContextProvider({children}: ExpenseContextProviderProps) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expense: Expense) {
    dispatch({type: ExpenseActionKind.ADD, payload: expense });
  }

  function setExpenses(expenses: Expense[]) {
    dispatch({type: ExpenseActionKind.SET, payload: expenses})
  }

  function deleteExpense(id: string) {
    dispatch({type: ExpenseActionKind.DELETE, payload: id})
  }

  function updateExpense(id: string, expense: ExpenseData) {
    dispatch({type: ExpenseActionKind.UPDATE, payload: {id: id, data: expense }})
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    setExpenses: setExpenses,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider