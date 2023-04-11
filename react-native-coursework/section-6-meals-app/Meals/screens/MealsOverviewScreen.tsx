import { View, FlatList, StyleSheet, ListRenderItemInfo } from "react-native"
import { MEALS } from "../data/meal-data"
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from "@react-navigation/native";
import MealItem from "../components/MealItem";
import Meal from "../models/meal";

type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: {categoryId: string};
};

interface Props {
  navigation: NativeStackScreenProps<RootStackParamList, "MealsOverview">;
  route: RouteProp<RootStackParamList, "MealsOverview">;
}

function MealsOverviewScreen({ route }: Props) {
  const catId: string = route.params.categoryId;
  const displayedMeals: Meal[] = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  function renderMealItem(item: Meal) {
    return <MealItem title={item.title} />
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData.item)}
      />
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