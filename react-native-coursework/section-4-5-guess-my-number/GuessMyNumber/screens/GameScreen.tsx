import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons'

import Title from "../components/ui/Title.android";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";
import generateRandomBetween from "../utilities/generate-random-between";

interface GameScreenProps {
  userNumber: number,
  onGameOver: (numberOfRounds: number) => void
}

let minBoundary: number = 1;
let maxBoundary: number = 100;

function GameScreen({ userNumber, onGameOver }: GameScreenProps) {
  const [currentGuess, setCurrentGuess] = useState<number>(() => (
    generateRandomBetween(minBoundary, maxBoundary, userNumber)
  ));
  const [guessRounds, setGuessRounds] = useState<number[]>([currentGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100
  }, []);

  function nextGuessHandler(direction: string) {
    if (
        (direction === 'lower' && currentGuess < userNumber) ||
        (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: 'Sorry!', style: 'cancel' }
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newGuess = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newGuess);
    setGuessRounds(prevGuessRounds => [newGuess, ...prevGuessRounds]);
  };

  const guessRoundsListLength: number = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                <Ionicons name="md-remove" size={24} color="white" />
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={() => nextGuessHandler('greater')}>
                <Ionicons name="md-add" size={24} color="white" />
              </PrimaryButton>
            </View>
          </View>
        </Card>
    </>
  )

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('greater')}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    )
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center'
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 1
  },
  listContainer: {
    flex: 1,
    padding: 16
  }
})