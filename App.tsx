import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TasksScreen from './src/Screen/Tasks';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {
  const [a, setA] = useState(0);

  return (
    <SafeAreaView style={ {flex:1} }>
      {/* <TasksScreen /> */}
      <Text onPress={() => setA(a + 1)}>Bonjour { a }</Text>
    </SafeAreaView>
  );
}
