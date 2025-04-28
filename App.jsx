import { StyleSheet, Text, View } from 'react-native'
import React, { Suspense } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppNavigation from './src/navigation/AppNavigation'

export default function App() {
  return (
    <SafeAreaProvider
    initialMetrics={{
      insets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    }}
    >
      <Suspense>
      <AppNavigation/>
      </Suspense>
    </SafeAreaProvider>
  

  )
}

const styles = StyleSheet.create({})