import { View, Pressable, Text } from "react-native";

interface CategoryGridTitleProps {
  title: string,
  color: string
}

function CategoryGridTitle({title, color}: CategoryGridTitleProps) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTitle;