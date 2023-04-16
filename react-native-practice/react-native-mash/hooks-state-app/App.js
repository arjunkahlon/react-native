import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Linking
} from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [bgColor, setBgColor] = useState('blue');
  const [textColor, setTextColor] = useState('white');

  const onClickHandler = () => {
    setCounter((prevCount) => prevCount + 1);
    let background;
    let textColor;

    if (counter <= 2) {
      background = 'blue';
      textColor = 'white';
    } else if (counter <= 5) {
      background = 'purple';
      textColor = 'white';
    } else if (counter <= 8) {
      background = 'red';
      textColor = 'black';
    } else if (counter <= 11) {
      background = 'orange';
      textColor = 'black';
    } else if (counter <= 14) {
      background = 'yellow';
      textColor = 'black';
    } else {
      background = 'white';
      textColor = 'black'
    }

    setBgColor(background)
    setTextColor(textColor)
  }

  return (
    <View style={[styles.body, {backgroundColor: bgColor}]}>
      <Text style={[styles.text, {color: textColor}]}>Click Counter</Text>
      <Text style={[styles.text, {color: textColor}]}>Click Number: {counter}</Text>
      <Pressable title="Hot Button" 
              onPress={onClickHandler} 
              style={
                {
                  backgroundColor: bgColor, 
                  borderWidth: 1,
                  borderColor: textColor,
                  padding: 20,
                  borderRadius: 20
                }
              }>
        <Text style={{color: textColor}}>Hot Button</Text>            
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10
  }
})