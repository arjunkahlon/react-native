import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native'

import Input from './Input';
import Button from '../UI/Button';
import { Expense } from '../../types/Expense';
import { GlobalStyles } from '../../constants/styles';

type InputValues = {
  value: string,
  isValid: boolean
}

type Inputs = {
  amount: InputValues,
  date: InputValues,
  description: InputValues
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
  const [inputs, setInputs] = useState<Inputs>({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : '', 
      isValid: true
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true
    }
  });

  function inputChangeHandler(inputIdentifier: string, enteredValue: string) {
    setInputs((currInputs) => {
      return {
        ...currInputs,
        [inputIdentifier]: {
          value: enteredValue, 
          isValid: true
        }
      }
    })
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((currentInputs) => {
        return {
          amount: {
            value: currentInputs.amount.value,
            isValid: amountIsValid
          },
          date: {
            value: currentInputs.date.value,
            isValid: dateIsValid
          },
          description: {
            value: currentInputs.description.value,
            isValid: descriptionIsValid
          }
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  const formIsInvalid = 
    !inputs.amount.isValid || 
    !inputs.date.isValid || 
    !inputs.description.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label='Amount'
          textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: (enteredValue) => inputChangeHandler('amount', enteredValue),
            value: inputs.amount.value,
          }}
          style={styles.rowInput}
          invalid = {!inputs.amount.isValid}
        />
        <Input
          label='Date'
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: (enteredValue) => inputChangeHandler('date', enteredValue),
            value: inputs.date.value,
          }}
          style={styles.rowInput}
          invalid = {!inputs.date.isValid}
        />
      </View>
      <Input 
        label='Description'
        textInputConfig = {{
          multiline: true,
          onChangeText: (enteredValue) => inputChangeHandler('description', enteredValue),
          value: inputs.description.value,
        }}
        invalid = {!inputs.description.isValid}
      />
      {formIsInvalid && 
        <Text style={styles.errorText}>
          Invalid Expense Input
        </Text> 
      }
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
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 8
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