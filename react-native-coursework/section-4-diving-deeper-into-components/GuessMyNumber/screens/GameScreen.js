import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import generateRandomBetween from "../utilities/generate-random-between";



function GameScreen({userNumber}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  }
})