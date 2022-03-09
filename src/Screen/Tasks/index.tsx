import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from '../../Component/Header/Header';
import TaskForm from './TaskForm';
import TaskTittle from './TaskTittle';

export default function TasksScreen() {
  const [tasks, setTasks] = useState<ToDoType[]>([
      { id: 0, title: "To do", isCompleted: false }
  ])

  const renderItem = ({item, index}: any) => {
    return <TaskTittle taskItem={index} tasks={tasks} setTasks={setTasks} />
  }

  const onAddTask = (title: any) => {
    setTasks([...tasks, {
      id: tasks.length == 0 ? 0 : tasks[tasks.length - 1].id + 1,
      title,
      isCompleted: false,
    }])
  }

  const onUpdateTask = (id: any) => {
    let newTasks: ToDoType[] = []

    tasks.forEach( t => {
      if (t.id !== id) {
        newTasks.push(t)
        return
      }
      newTasks.push({
        id: tasks.length,
        title: t.title,
        isCompleted: t.isCompleted
      });
    })
    setTasks(newTasks);
  }

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            <TaskForm onAddTask={onAddTask}></TaskForm>
          </>
      }
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  )
}

export type ToDoType = {
  id: number;
  title: string;
  isCompleted: boolean;
};
