import React from 'react'
import { View } from 'react-native'
import { Text, Button } from 'react-native-elements'
import * as firebase from 'firebase'


function HomeScreen() {
  return (
    <View>
      <Text h1>Home Screen</Text>
      <Button title='sign out' onPress={() => firebase.auth().signOut()} />
    </View>
  )
}

export default HomeScreen
