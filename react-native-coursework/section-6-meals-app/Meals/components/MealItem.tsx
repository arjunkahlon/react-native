import { View, Text } from "react-native";

interface MealItemProps {
  title: string
}

function MealItem({ title }: MealItemProps) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

export default MealItem;