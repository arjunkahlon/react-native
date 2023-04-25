import { useContext, useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import { ExpensesContext } from '../store/ExpensesContext';
import IconButton from '../components/UI/IconButton';
import Button from '../components/UI/Button';

import { GlobalStyles } from '../constants/styles';

type RootStackParamList = {
  ManageExpense: {expenseId?: string},
  ExpensesOverview: undefined
};

type Props = NativeStackScreenProps<RootStackParamList, 'ManageExpense'>;

function ManageExpense({route, navigation}: Props) {
  const expensesContext = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

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

  function confirmHandler() {
    if (isEditing) {
      expensesContext.updateExpense(
        editedExpenseId,
        {
          description: 'Test!!!!!!',
          amount: 29.99,
          date: new Date('2023-04-20')
        } as never
      );
    } else {
      expensesContext.addExpense(
        {
          description: 'Test',
          amount: 19.99,
          date: new Date('2023-04-19')
        } as never
      );
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm />
      <View style={styles.buttonsContainer}>
        <Button 
          mode='flat' 
          onPress={cancelHandler}
          style={styles.button}
        >
          Cancel
        </Button> 
        <Button
          onPress={confirmHandler}
          style={styles.button}
        >
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center'

  }
})