import { View, Text, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import { KeyboardType } from 'react-native'

interface InputConfiguration {
  keyboardType?: KeyboardType,
  maxLength?: number,
  placeholder?: string,
  multiline?: boolean,
  onChangeText?: (text: string) => void
}

interface InputProps {
  label: string,
  textInputConfig: InputConfiguration
}

function Input({label, textInputConfig}: InputProps) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  )
}

export default Input;