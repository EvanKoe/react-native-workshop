import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"];
export default function Header() {
    const date = new Date()

  return (
    <View style={styles.contenair}>
      <Text style={styles.date}>To do list</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenair: {
      paddingLeft: 20,
      paddingTop: 20
  },
  date: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10
  }
})
