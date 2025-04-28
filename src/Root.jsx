import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthenticateLayout from './layout/AuthenticateLayout'
import AuthLayout from './layout/AuthLayout'

export default function Root() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  return (
    <GestureHandlerRootView style={{flex: 1,  }}>
      {isAuthenticated ? <AuthenticateLayout/> : <AuthLayout/>}

     {/* <AuthLayout/> */}
     {/* <AuthenticateLayout/> */}
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})