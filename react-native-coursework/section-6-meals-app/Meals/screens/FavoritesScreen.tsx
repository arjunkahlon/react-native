import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native'

import MealsList from '../components/MealsList/MealsList';
import { FavoritesContext } from '../store/context/FavoritesContext';
import { MEALS } from '../data/meal-data';

function FavoritesScreen() {
  const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter(meal => favoriteMealsContext.ids.includes(meal.id));
  
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
    
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }

})