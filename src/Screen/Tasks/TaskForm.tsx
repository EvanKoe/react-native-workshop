import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TaskForm({ onAddTask, setTasks }: any) {
  const [newTitle, setNewTitle] = useState("")

  const onChangeText = (val: any) => {
    setNewTitle(val)
  }

  const onNewAddTask = () => {
    if (newTitle === "") {
      return
    }
    onAddTask(newTitle)
    setNewTitle("")
  }

  return (
    <View style={styles.contenair}>
      <View style={styles.inputDiv}>
        <TextInput
          onChangeText={onChangeText}
          value={newTitle}
          style={styles.input}
          placeholder="Nouvelle tâche"
        />
        <TouchableOpacity style={styles.add} onPress={onNewAddTask}>
          <MaterialIcons name="add" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputDiv: {
    backgroundColor: "#bbb",
    borderRadius: 20,
    flex: 1,
    height: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  input: {
    flex: 1
  },
  add: {
    marginTop: 'auto',
    marginLeft: 'auto',
    marginBottom: 'auto'
  },
  contenair: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingHorizontal: 20,
    marginTop: 10
  }
})
