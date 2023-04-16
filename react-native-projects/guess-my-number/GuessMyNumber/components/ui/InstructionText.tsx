import { Text, StyleSheet, ViewStyle } from "react-native";
import Colors from "../../constants/colors.ios";
import { ReactNode } from "react";

interface InstructionTextProps {
	children: ReactNode,
	style ?: ViewStyle
}

function InstructionText({ children, style } : InstructionTextProps) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
		fontFamily: 'open-sans',
		color: Colors.secondary500,
		fontSize: 24
	},
})