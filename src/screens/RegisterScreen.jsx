import React, { useState, useCallback } from 'react'
import { View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { register } from '../fire'

function RegisterScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeat, setRepeat] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  const handleRegister = useCallback(async () => {
    try {
      setError(null)
      setLoading(true)
      if (!email) {
        setError('email required!')
        setLoading(false)
        return
      }
      if (password !== repeat) {
        setError('passwords do not match')
        setLoading(false)
        return
      }

      const res = await register(email, password)
      if (res.message) {
        setError(res.message)
        setLoading(false)
        return
      }
    } catch (e) {
      setError(e.message)
      setLoading(false)
      return
    }
  }, [email, password, repeat])

  return loading ? (
    <View>
      <Text>loading...</Text>
    </View>
  ) : (
    <View>
      <Input
        placeholder='email'
        onChangeText={setEmail}
        autoCompleteType='email'
        textContentType='emailAddress'
        autoCapitalize='none'
      />
      <Input
        placeholder='password'
        onChangeText={setPassword}
        secureTextEntry
        autoCompleteType='password'
        textContentType='password'
        autoCapitalize='none'
      />
      <Input
        placeholder='repeat'
        onChangeText={setRepeat}
        secureTextEntry
        autoCompleteType='password'
        textContentType='password'
        autoCapitalize='none'
      />
      {error && <Text>{error}</Text>}
      <Button title='submit' onPress={handleRegister} />
    </View>
  )
}

export default RegisterScreen
