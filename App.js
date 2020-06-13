import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as firebase from 'firebase'
import { FIREBASE_CONFIG } from './config'
import Bootstrap from './src/Bootstrap'

firebase.initializeApp(FIREBASE_CONFIG)

export default function App() {
  return <Bootstrap />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
