import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface MealItemProps {
  id: string,
  title: string,
  imageUrl: string,
  duration: number,
  complexity: string,
  affordability: string
}

function MealItem(item: MealItemProps) {
  const navigation = useNavigation();

  function selectMealItemHandler(id: string) {
    navigation.navigate('MealDetail' as never, {
      mealId: id
    } as never)
  }
  
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => pressed ? styles.buttonPressed : null}
        onPress={() => selectMealItemHandler(item.id)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{uri: item.imageUrl}} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{item.duration}</Text>
            <Text style={styles.detailItem}>{item.complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{item.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 16
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  buttonPressed: {
    opacity: 0.5
  },
  image: {
    width: '100%',
    height: 220
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  }
})