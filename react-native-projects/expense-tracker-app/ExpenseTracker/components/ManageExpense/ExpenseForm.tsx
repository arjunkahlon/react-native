import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native'

import Input from './Input';
import Button from '../UI/Button';
import { Expense } from '../../types/Expense';

type InputValues = {
  amount: string,
  date: string,
  description: string
}

type ExpenseData = {
  description: string,
  amount: number,
  date: Date
}

interface ExpenseFormProps {
  onCancel: () => void,
  onSubmit: (expenseData: ExpenseData) => void,
  submitButtonLabel: string,
  defaultValues: Expense | undefined
}

function ExpenseForm({onCancel, onSubmit, submitButtonLabel, defaultValues}: ExpenseFormProps) {
  const [inputValues, setInputValues] = useState<InputValues>({
    amount: defaultValues ? defaultValues.amount.toString() : '',
    date: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '',
    description: defaultValues ? defaultValues.description : ''
  });

  function inputChangeHandler(inputIdentifier: string, enteredValue: string) {
    setInputValues((currInputValues) => {
      return {
        ...currInputValues,
        [inputIdentifier]: enteredValue
      }
    })
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description
    };

    const amountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountValid || !dateIsValid || !descriptionIsValid) {
      Alert.alert('Invalid input', 'Please check yout input values');
      return;
    }

    onSubmit(expenseData);
  }
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label='Amount'
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: (enteredValue) => inputChangeHandler('amount', enteredValue),
            value: inputValues.amount
          }}
          style={styles.rowInput}
        />
        <Input
          label='Date'
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: (enteredValue) => inputChangeHandler('date', enteredValue),
            value: inputValues.date
          }}
          style={styles.rowInput}
        />
      </View>
      <Input 
        label='Description'
        textInputConfig = {{
          multiline: true,
          onChangeText: (enteredValue) => inputChangeHandler('description', enteredValue),
          value: inputValues.description
        }}
      />
            <View style={styles.buttonsContainer}>
        <Button 
          mode='flat' 
          onPress={onCancel}
          style={styles.button}
        >
          Cancel
        </Button> 
        <Button
          onPress={submitHandler}
          style={styles.button}
        >
          {submitButtonLabel}
        </Button>
      </View>

    </View>
  )

}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center'
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowInput:{
    flex: 1
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  }
})