import { useContext, useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { ExpensesContext } from '../store/ExpensesContext';
import IconButton from '../components/UI/IconButton';
import { storeExpense } from '../util/http';

import { GlobalStyles } from '../constants/styles';
import { Expense } from '../types/Expense';
import { ExpenseData } from '../types/Expense';

type RootStackParamList = {
  ManageExpense: {expenseId?: string},
  ExpensesOverview: undefined
};

type Props = NativeStackScreenProps<RootStackParamList, 'ManageExpense'>;


function ManageExpense({route, navigation}: Props) {
  const expensesContext = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesContext.expenses.find((expense: Expense) => {
    return expense.id === editedExpenseId;
  })

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    if (editedExpenseId) {
      expensesContext.deleteExpense(editedExpenseId);
    }
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData: ExpenseData) {
    if (isEditing) {
      expensesContext.updateExpense(
        editedExpenseId, expenseData
      );
    } else {
      const id = await storeExpense(expenseData);
      expensesContext.addExpense(
        {
          ...expenseData,
          id: id
        }
      );
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm 
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel= {isEditing ? 'Update' : 'Add'}
        defaultValues = {selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}

    </View>
  )
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
    
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'

  }
})