import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: {categoryId: string};
};



const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: 'white',
            cardStyle: {
              backgroundColor: '#3f2f25'
            }
          }}
        >
          <RootStack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
           <RootStack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
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
