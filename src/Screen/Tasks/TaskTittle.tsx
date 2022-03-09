import React, { useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import { ToDoType } from '.';

export default function TaskTittle({ taskItem, tasks, setTasks }: any) {
  const onChangeStatus = () => {
    setTasks([...tasks.map((e: ToDoType, i: number) => {
      return i === taskItem ? {
        id: e.id,
        title: e.title,
        isCompleted: !e.isCompleted,
      } : e;
    })]);
  };

  const onDeleteTask = () => {
    setTasks(tasks.filter((e: ToDoType, i: number) => taskItem !== i));
  };

  const e: ToDoType = tasks[taskItem] === undefined ? { id: 0, title: 'todo', isCompleted: false } : tasks[taskItem];

  return (
    <View style={styles.contenair}>
      <TouchableOpacity onPress={onChangeStatus} style={styles.subcontenair}>
        <Feather name={e.isCompleted ? "check-circle" : "circle" } size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{e.title}</Text>
      <TouchableOpacity onPress={onDeleteTask}>
        <Feather name="trash" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    contenair: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
    },

    subcontenair: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    title: {
        fontSize: 16,
        marginLeft: 20,
        marginRight: 'auto'
    }
})
