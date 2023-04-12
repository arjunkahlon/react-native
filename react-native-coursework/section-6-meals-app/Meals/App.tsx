import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContent, createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';

type RootStackParamList = {
  Drawer: undefined;
  MealsOverview: {categoryId: string};
  MealDetail: {mealId: string}
};



const RootStack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#351401',
        },
        headerTintColor: 'white',
        sceneContainerStyle: {
          backgroundColor: 'black'
        },
        drawerContentStyle: {
          backgroundColor: '#351401',
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#e4baa1',
      }}
    >
      <Drawer.Screen
        name='MealsCategories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <Ionicons name='list' color={color} size={size}  />
          )
        }}
      />
      <Drawer.Screen 
      name='Favorites'
      component={FavoritesScreen}
      options={{
        drawerIcon: ({color, size}) => (
          <Ionicons name='star' color={color} size={size}  />
        )
      }}
      />
    </Drawer.Navigator>
  )

}

export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: 'white',
            cardStyle: {
              backgroundColor: 'black'
            }
          }}
        >
          <RootStack.Screen
            name='Drawer'
            component={DrawerNavigator}
            options={{
              title: 'Categories',
              headerShown: false
            }}
          />
           <RootStack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
          />
          <RootStack.Screen 
            name='MealDetail'
            component={MealDetailScreen}
          />
          
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
