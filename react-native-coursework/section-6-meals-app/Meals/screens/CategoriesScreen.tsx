import { FlatList, ListRenderItemInfo } from "react-native";
import { CATEGORIES } from "../data/meal-data";
import Category from "../models/category";
import CategoryGridTitle from "../components/CategoryGridTile";
import { useNavigation } from "@react-navigation/native";

function CategoriesScreen() {

  const navigation = useNavigation();

  function pressHandler(id: string) {
    navigation.navigate('MealsOverview' as never, {
      categoryId: id
    } as never);
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