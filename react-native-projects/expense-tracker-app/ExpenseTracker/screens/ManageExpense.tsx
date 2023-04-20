import { useLayoutEffect } from 'react';
import { Text } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  ManageExpense: {expenseId?: string},
  ExpensesOverview: undefined
};

type Props = NativeStackScreenProps<RootStackParamList, 'ManageExpense'>;

function ManageExpense({route, navigation}: Props) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing]);


  return <Text>ManageExpense Screen</Text>
}

export default ManageExpense;