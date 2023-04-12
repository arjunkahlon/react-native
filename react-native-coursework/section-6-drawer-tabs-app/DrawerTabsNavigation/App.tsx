import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from "@react-navigation/native";
import { DrawerContent, createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';
import "react-native-gesture-handler";
 
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";


 
const Drawer = createDrawerNavigator();
 
function App() {
  return (
    <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Drawer.Navigator 
          screenOptions={{
            drawerActiveBackgroundColor: '#f0e1ff',
            drawerActiveTintColor: '#3c0a6b',
            headerStyle: {backgroundColor: '#3c0a6b'},
            headerTintColor: 'white'
          }}
        >
          <Drawer.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              drawerLabel: 'Welcome Screen',
              drawerIcon: ({color, size}) => (
                <Ionicons name="home" color={color} size={size}/>
              ),
              
            }}
          />
          <Drawer.Screen 
            name="User" 
            component={UserScreen}
            options={{
              drawerIcon: ({ color, size}) => (
                <Ionicons name='person' color={color} size={size} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
 
export default App;

