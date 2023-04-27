import { View, Text, TextInput, ViewStyle, StyleSheet } from 'react-native';
import { KeyboardType } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { TextStyle } from 'react-native';

interface InputConfiguration {
  keyboardType?: KeyboardType,
  maxLength?: number,
  placeholder?: string,
  multiline?: boolean,
  onChangeText?: (enteredValue: string) => void,
  value?: string
}

interface InputProps {
  label: string,
  textInputConfig: InputConfiguration,
  style?: ViewStyle
}

function Input({label, textInputConfig, style}: InputProps) {
  const inputStyles: TextStyle[] = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 10,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    color: GlobalStyles.colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top'
  }
})