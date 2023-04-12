import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

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
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: selectedMeal?.imageUrl}} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails 
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients}/>
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps}/>
        </View>
      </View>
    </ScrollView>
  )

}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  detailText: {
    color: 'white'
  },
  listOuterContainer: {
    alignItems: 'center'
  },
  listContainer: {
    width: '80%'
  }
})