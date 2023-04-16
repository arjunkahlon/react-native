import { useState } from "react";
import { 
	TextInput, 
	View, 
	StyleSheet, 
	Alert, 
	useWindowDimensions,
	KeyboardAvoidingView,
	ScrollView 
} from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title.android";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";
import Colors from "../constants/colors.ios";

interface StartGameScreenProps {
	onPickNumber: (pickedNumber: number) => void
}

function StartGameScreen({onPickNumber}: StartGameScreenProps) {
	const [enteredNumber, setEnteredNumber] = useState<string>('');

	const {height} = useWindowDimensions();

	function numberInputHandler(enteredText: string) {
		setEnteredNumber(enteredText);
	}

	function resetInputHandler() {
		setEnteredNumber('');
	}

	function confirmInputHandler() {
		const inputNumber: number = parseInt(enteredNumber);

		if (isNaN(inputNumber) || inputNumber <= 0 || inputNumber > 99) {
			Alert.alert(
				'Invalid number', 
				'Number has to be a number between 1 and 99',
				[{
					text: 'Okay', 
					style: 'destructive', 
					onPress: resetInputHandler
				}]  
			);
			return;
		}
		onPickNumber(inputNumber);
	}

	const marginTopDistance: number = height < 430 ? 30 : 100;

	return (
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView style={styles.screen} behavior="position">
				<View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
					<Title>Guess My Number</Title>
					<Card>
						<InstructionText>
							Enter a Number
						</InstructionText>
						<TextInput
							style={styles.numberInput}
							maxLength={2}
							keyboardType="number-pad"
							autoCapitalize="none"
							autoCorrect={false}
							onChangeText={numberInputHandler}
							value={enteredNumber}
						/>
						<View style={styles.buttonsContainer}>
							<View style={styles.buttonContainer}>
								<PrimaryButton onPress={resetInputHandler}>
									Reset
								</PrimaryButton>
							</View>
							<View style={styles.buttonContainer}>
								<PrimaryButton onPress={confirmInputHandler}>
									Confirm
								</PrimaryButton>
							</View>
						</View>
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	)
}


export default StartGameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
	rootContainer: {
		flex: 1,
		alignItems: 'center'
	},
	numberInput: {
		height: 50,
		width: 50, 
		fontSize: 32,
		borderBottomColor: Colors.secondary500,
		borderBottomWidth: 2,
		color: Colors.secondary500,
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	buttonsContainer: {
		flexDirection: 'row'
	},
	buttonContainer: {
		flex: 1
	}
});