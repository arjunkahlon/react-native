import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { GestureResponderEvent } from "react-native";

import Input from './Input';
import Button from '../UI/Button';

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
  submitButtonLabel: string
}

function ExpenseForm({onCancel, onSubmit, submitButtonLabel}: ExpenseFormProps) {
  const [inputValues, setInputValues] = useState<InputValues>({
    amount: '',
    date: '',
    description: ''
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