import { Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { GestureResponderEvent } from 'react-native'

type IconName = React.ComponentProps<typeof Ionicons>['name'];

interface IconButtonProps {
  iconName: IconName,
  onPress: (event: GestureResponderEvent) => void,
  color: string
}

function IconButton({ iconName, onPress, color }: IconButtonProps) {
  return(
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <Ionicons name={iconName} size={24} color={color}/>
    </Pressable>
  )
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7
  }
})