import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error(error);
      }
    };
    loadTasks();
  }, []);

  const addTask = async () => {
    if (task.trim()) {
      const newTasks = [...tasks, { id: Date.now().toString(), text: task }];
      setTasks(newTasks);
      setTask('');
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text  style={styles.title}>Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder="Adicionar nova tarefa"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.taskList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center', 
  },
  title: {
    width: '100%',
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
    width: '100%', 
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 50, 
    alignItems: 'center',
    marginBottom: 20,
    width: '100%', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 50, 
    alignItems: 'center',
    marginBottom: 20,
    width: '100%', 
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  taskList: {
    width: '100%', 
    height: '100%',
  },
  taskItem: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#f9f9f9', 
    borderRadius: 8, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
    color: '#333', 
  },
  deleteIcon: {
    width: 24,
    height: 24,
    tintColor: '#FF0000', 
  },
});