import { View, Text, StyleSheet } from "react-native"
import { MEALS } from "../data/meal-data"
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: {categoryId: string};
};

interface Props {
  navigation: NativeStackScreenProps<RootStackParamList, "MealsOverview">;
  route: RouteProp<RootStackParamList, "MealsOverview">;
}

function MealsOverviewScreen({ route }: Props) {
  const catId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
    </View>
  )
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})