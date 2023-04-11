import { View, Text, Image } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/meal-data";
import Meal from "../models/meal";

type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: {categoryId: string};
  MealDetail: {mealId: string}
};

type Props = NativeStackScreenProps<RootStackParamList, 'MealDetail'>;

function findMeal(mealId: string) {
  function assert(value: unknown): asserts value {}

  const meal = MEALS.find((meal) => meal.id === mealId)
  assert(meal);
  return meal;
}

function MealDetailScreen( {route}: Props) {
  const mealId: string = route.params.mealId;
  const selectedMeal = findMeal(mealId);

  return(
    <View>
      <Image style={{width: '100%', height: 200}} source={{uri: selectedMeal?.imageUrl}} />
      <Text>{selectedMeal?.title}</Text>
      <MealDetails 
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
    </View>
  )

}

export default MealDetailScreen;