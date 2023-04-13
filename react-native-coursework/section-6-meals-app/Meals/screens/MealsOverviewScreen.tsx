import { useLayoutEffect } from "react";
import { View, FlatList } from "react-native"
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MEALS } from "../data/meal-data"
import MealsList from "../components/MealsList/MealsList";
import Meal from "../models/meal";
import { CATEGORIES } from "../data/meal-data";

type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: {categoryId: string};
  MealDetail: {mealId: string}
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

  

  return <MealsList items={displayedMeals}/>
};

export default MealsOverviewScreen;
