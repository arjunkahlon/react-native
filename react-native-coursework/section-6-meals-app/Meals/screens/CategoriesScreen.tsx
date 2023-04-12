import { FlatList, ListRenderItemInfo } from "react-native";
import { CATEGORIES } from "../data/meal-data";
import Category from "../models/category";
import CategoryGridTitle from "../components/CategoryGridTile";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: {categoryId: string};
  MealDetail: {mealId: string}
};

type Props = NativeStackScreenProps<RootStackParamList, 'MealsCategories', 'MealsOverview'>;

function CategoriesScreen({ navigation }: Props) {

  function pressHandler(id: string) {
    navigation.navigate('MealsOverview', {
      categoryId: id
    });
  }

  return <FlatList 
          key='categories'
          data={CATEGORIES} 
          keyExtractor={(item) => item.id}
          renderItem={({ item }: ListRenderItemInfo<Category>) =>{
            return <CategoryGridTitle 
                      title={item.title} 
                      color={item.color}
                      onPress={(event) => pressHandler(item.id)}
                    />
          }}
          numColumns={2}
        />
}

export default CategoriesScreen;