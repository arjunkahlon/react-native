import { Pressable, Text, View, StyleSheet, GestureResponderEvent, ViewStyle } from 'react-native'
import { ReactNode } from 'react';
import { GlobalStyles } from '../../constants/styles';

interface ButtonProps {
  children: ReactNode,
  onPress: (event: GestureResponderEvent) => void,
  mode?: string,
  style?: ViewStyle
}

function Button({children, onPress, mode, style}: ButtonProps) {
  return (
    <View style={style}>
      <Pressable 
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}  
      >
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  )

}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500
  },
  flat: {
    backgroundColor: 'transparent'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  flatText: {
    color: GlobalStyles.colors.primary200
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4
  }
})