import { View, Text, StyleSheet } from 'react-native'

function FavoritesScreen() {
  return (
          <View style={styles.screen}>
            <Text style={styles.text}>Favorites</Text>
            <Text style={styles.text}>This Favorites Screen will be implemented in next feature</Text>
          </View>
  )
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    margin: 10
  }
})