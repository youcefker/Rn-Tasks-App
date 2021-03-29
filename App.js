import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform } from 'react-native';
import Task from './components/Task'
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
          <Text style={styles.titleSection}>Today's Tasks</Text>
          <View style={styles.items}>
            <Task text='hello'/>
            <Task text='world!'/>
          </View>
      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS == "ios" ? 'padding': 'height'}
        style={styles.writeTaskWrapper}> 
        <TextInput style={styles.input} placeholder="Add New Task"/>
        <TouchableOpacity>
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
    zIndex: 20,
    shadowColor: 'black',
    shadowOpacity: 0.7,
    elevation: 3
  },
  addText: {
    fontSize: 50,
    opacity: 0.6
  }
});
