import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainStack from './navigator/index'
import { Provider } from 'react-redux'
import store from './store'
const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <Provider store={store}>

      <MainStack />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})