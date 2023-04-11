import { View, Text } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: {categoryId: string};
  MealDetail: {mealId: string}
};

type Props = NativeStackScreenProps<RootStackParamList, 'MealDetail'>;



function MealDetailScreen( {route}: Props) {
  const mealId = route.params.mealId;
  return(
    <View>
      <Text style={{color: 'white'}}>This is the Meal Details Screen for {mealId}</Text>
    </View>
  )

}

export default MealDetailScreen;