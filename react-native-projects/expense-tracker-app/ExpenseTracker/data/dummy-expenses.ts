import { Expense } from "../types/Expense"

export const DUMMY_EXPENSES: Expense[] = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2023-04-17')
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2023-03-05')
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2023-04-13')
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: new Date('2023-03-19')
  },
  {
    id: 'e5',
    description: 'A laptop',
    amount: 799.99,
    date: new Date('2022-12-25')
  }
]