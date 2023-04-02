import { StatusBar } from 'expo-status-bar';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text
      style={{marginTop: 40, paddingHorizontal: 10}}>Hello World!</Text>
      <View style={{paddingHorizontal: 10}} >
        <Text>My name is Arjun</Text>
        <Image
          source={{
            uri: 'https://media.licdn.com/dms/image/D5603AQE6dGZU2KiCYA/profile-displayphoto-shrink_400_400/0/1671264356089?e=1686182400&v=beta&t=c3CvB9JLJOpYst6NAeDOGeveJJxOWQtQCLgvUYMJ9ME',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          color: 'black',
          marginTop: 2,
          marginHorizontal: 10,
          paddingLeft: 5
        }}
        placeholder="Tell me about yourself"
      />
    </ScrollView>
  );
}
