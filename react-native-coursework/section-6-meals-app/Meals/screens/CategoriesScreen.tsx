import { FlatList, ListRenderItemInfo } from "react-native";
import { CATEGORIES } from "../data/meal-data";
import Category from "../models/category";
import CategoryGridTitle from "../components/CategoryGridTile";


function CategoriesScreen() {
  return <FlatList 
          key='categories'
          data={CATEGORIES} 
          keyExtractor={(item) => item.id}
          renderItem={({ item }: ListRenderItemInfo<Category>) =>{
            return <CategoryGridTitle title={item.title} color={item.color}/>
          }}
          numColumns={2}
        />
}

export default CategoriesScreen;