import { StyleSheet, Text, Platform } from "react-native";
import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode
}


function Title({children}: TitleProps) {
  return <Text style={styles.title}>{children}</Text>

}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    padding: 12,
    maxWidth: '80%',
    width: 300
  }
})