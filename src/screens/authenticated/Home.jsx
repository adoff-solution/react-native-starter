import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppBottomNavigator } from '../../navigation/AppNavigation'

export default function Home() {
  return (
    <View style={{flex: 1, }}>
      <AppBottomNavigator/>
    </View>
  )
}

const styles = StyleSheet.create({})