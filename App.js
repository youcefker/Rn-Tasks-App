import React, {useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task'
export default function App() {
  const [task, setTask] = useState()
  const [tasks, setTasks] = useState([])

  const addTaskHandler = () => {
    Keyboard.dismiss()
    setTasks(currentTasks => [...currentTasks, task]) 
    setTask(null)
  }

  const removeTaskHandler = (index) => {
    let updatedTasks = [...tasks]
    updatedTasks.splice(index, 1)
    setTasks(updatedTasks)
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
          <Text style={styles.titleSection}>Today's Tasks</Text>
          <View style={styles.items}>
            <ScrollView>
              {tasks.map((item, index) => <Task text={item} key={index} onDelete={() =>removeTaskHandler(index)} />)}
            </ScrollView>
          </View>
      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? 'padding': 'height'}
        style={styles.writeTaskWrapper}> 
        <TextInput style={styles.input} placeholder="Add New Task" onChangeText={text => setTask(text)} value={task}/>
        <TouchableOpacity onPress={addTaskHandler}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  titleSection: {
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  input: {
    width: 250,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addWrapper: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 50,
    opacity: 0.6
  }
});
