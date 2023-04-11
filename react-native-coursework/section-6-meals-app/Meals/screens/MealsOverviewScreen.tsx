import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet, ListRenderItemInfo } from "react-native"
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from "@react-navigation/native";

import { MEALS } from "../data/meal-data"
import MealItem from "../components/MealItem";
import Meal from "../models/meal";
import { CATEGORIES } from "../data/meal-data";

type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: {categoryId: string};
};

type Props = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>;


function MealsOverviewScreen({ route, navigation }: Props) {
  const catId: string = route.params.categoryId;
  const displayedMeals: Meal[] = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  
  useLayoutEffect(() => {
    const categoryTitle: string | undefined = CATEGORIES.find(
      (category) => category.id === catId)?.title;

    navigation.setOptions({
      title: categoryTitle
    });
    
  }, [catId, navigation])

  function renderMealItem(item: Meal) {
    return <MealItem 
            title={item.title}
            imageUrl={item.imageUrl}
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability} 
           />
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