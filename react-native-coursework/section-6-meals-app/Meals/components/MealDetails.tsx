import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface MealDetailsProps {
  duration: number,
  complexity: string,
  affordability: string,
  style?: ViewStyle,
  textStyle?: TextStyle
}

function MealDetails(item: MealDetailsProps) {
  return(
      <View style={[styles.details, item.style]}>
        <Text 
          style={[styles.detailItem, item.textStyle]}>
            {item.duration}m
        </Text>
        <Text 
          style={[styles.detailItem, item.textStyle]}>
            {item.complexity.toUpperCase()}
        </Text>
        <Text 
          style={[styles.detailItem, item.textStyle]}>
            {item.affordability.toUpperCase()}
        </Text>
      </View>
  )
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  }
})