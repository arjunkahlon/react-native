import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import "react-native-gesture-handler";
 
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";


 
const BottomTab = createBottomTabNavigator();
 
function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <BottomTab.Navigator 
          screenOptions={{
            headerStyle: { backgroundColor: '#3c0a6b'},
            headerTintColor: 'white',
            tabBarActiveTintColor: '#3c0a6b' 
          }}
        >
          <BottomTab.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Ionicons name='home' color={color} size={size} />
              )           
            }}
          />
          <BottomTab.Screen 
            name="User" 
            component={UserScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Ionicons name='person' color={color} size={size} />
              )
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}
 
export default App;

