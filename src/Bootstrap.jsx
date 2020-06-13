import React, { useState, useEffect, useCallback } from 'react'
import * as firebase from 'firebase'
import { ThemeProvider } from 'react-native-elements'
import { THEME } from './theme'
import { MainRouter } from './routers'

function Bootstrap() {
  const [authUser, setAuthUser] = useState()

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(setAuthUser)
    return subscriber
  }, [])
  return (
    <ThemeProvider theme={THEME}>
      <MainRouter authUser={authUser}/>
    </ThemeProvider>
  )
}

export default Bootstrap
