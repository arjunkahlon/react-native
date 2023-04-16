import { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  FlatList,
  Button 
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title='Add New Goal' 
                color="#eb73dd"
                onPress={startAddGoalHandler}
        />
        <GoalInput 
          onAddGoal = {addGoalHandler}
          onCancel = {endGoalHandler}
          showModal = {modalVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList 
            data={courseGoals} 
            renderItem={(itemData) => {
              return <GoalItem text={itemData.item.text}
                              id={itemData.item.id} 
                              onDeleteItem={deleteGoalHandler}
                      />
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }} 
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5,
  }
});
