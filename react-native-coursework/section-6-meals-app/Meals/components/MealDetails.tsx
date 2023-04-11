import { View, Text, StyleSheet } from "react-native";

interface MealDetailsProps {
  duration: number,
  complexity: string,
  affordability: string
}

function MealDetails(item: MealDetailsProps) {
  return(
      <View style={styles.details}>
        <Text style={styles.detailItem}>{item.duration}m</Text>
        <Text style={styles.detailItem}>{item.complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{item.affordability.toUpperCase()}</Text>
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