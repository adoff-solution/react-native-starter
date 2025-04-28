import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

export default function Dashboard() {
    const navigation = useNavigation()
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text style={{color: "blue", fontSize: responsiveFontSize(2)}}>Dashboard by Hira Soft Ltd</Text>
      <Text>Founder: Lutfor Rahman Hira</Text>
        <TouchableOpacity onPress={()=> navigation.openDrawer()} style={{backgroundColor: "blue", paddingHorizontal: responsiveWidth(2), paddingVertical: responsiveHeight(0.5), borderRadius: responsiveWidth(1)}}>
      <Text style={{color: "white"}}>Open Drawer</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})